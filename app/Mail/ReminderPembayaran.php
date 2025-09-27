<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Member;

class ReminderPembayaran extends Mailable
{
    use Queueable, SerializesModels;
    public $member;

    /**
     * Create a new message instance.
     */
    public function __construct(Member $member)
    {
        //
        $this->member = $member;
    }

    public function build()
    {
        return $this->subject('Pengingat Pembayaran Keanggotaan')
            ->view('emails.reminder_pembayaran')
            ->with([
                'user' => $this->member,
                'url' => "www.facebook.com",
            ]);
    }
    

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Reminder Pembayaran',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.reminder_pembayaran',
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
}
