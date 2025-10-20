<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Member;
use App\Models\User;

//Email ini untuk Verifikasi Pembayaran

class VerificationPembayaran extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $location;
    public $ip;
    public $member;

    /**
     * Create a new message instance.
     */
    /**
    *public function __construct($user, $location, $ip)
    *{
    *    //
    *    $this->user = $user;
    *    $this->location = $location;
    *    $this->ip = $ip;
    *}
        */

    public function __construct(member $member)
    {
        //
        $this->member = $member;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Verification Pemabayaran Success',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.verification-pembayaran',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
    public function build()
    {
        return $this->subject('Pembayaran Kamu Berhasil Diverifikasi ')
                ->view('emails.verification-pembayaran')
                ->with([
                'member' => $this->member,
                'url' => "www.facebook.com",
            ]);;
                    
         
    }
}
