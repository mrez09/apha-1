<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Member;
use App\Mail\ReminderPembayaran;
use Illuminate\Support\Facades\Mail;
use App\Models\User;


class SendReminderPembayaran extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminder:pembayaran {--limit= : Batas jumlah email yang dikirim}';
    

    /**
     * The console command description.
     *
     * @var string
     */
    //protected $description = 'Command description';
    protected $description = 'Kirim email pengingat ke anggota yang belum aktif atau belum punya KTA';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        //
        $members = Member::where(function ($q) {
            $q->whereNull('no_kta')
            ->orWhere('no_kta', '');
        })->where('status', 0)
        ->get();

        $total = $members->count();

        if ($total === 0) {
            $this->info('Tidak ada anggota yang perlu diingatkan.');
            return;
        }

        $this->info("Akan mengirim email ke {$total} anggota.");

        // Konfirmasi dulu sebelum kirim
        if (! $this->confirm('Yakin ingin melanjutkan pengiriman email?')) {
            $this->info('Dibatalkan oleh pengguna.');
            return;
        }

        // Opsi limit (misal --limit=5)
        $limit = (int) $this->option('limit');
        if ($limit > 0) {
            $members = $members->take($limit);
            $this->info("Dibatasi hanya {$limit} email untuk uji coba.");
        }

        foreach ($members as $member) {
            try {
                Mail::send('emails.reminder_pembayaran', ['member' => $member], function ($message) use ($member) {
                    $message->to($member->email)
                            ->subject('Pengingat Pembayaran Keanggotaan');
                });

                $this->info("Email dikirim ke: {$member->email}");
            } catch (\Exception $e) {
                $this->error("Gagal kirim ke {$member->email}: {$e->getMessage()}");
            }
        }

        $this->info('Semua email reminder sudah dikirim!');
    }
}
