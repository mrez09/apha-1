<?php

namespace App\Notifications;

use App\Models\ReleaseNote;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class ReleaseNotePublished extends Notification
{
    use Queueable;

    public function __construct(
        public ReleaseNote $releaseNote
    ) {
    }

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toDatabase(object $notifiable): array
    {
        return [
            'type' => 'release_note',
            'release_note_id' => $this->releaseNote->id,
            'version' => $this->releaseNote->version,
            'title' => $this->releaseNote->title,
        ];
    }
}