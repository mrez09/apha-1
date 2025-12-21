<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Notifications\ReleaseNotePublished;
use App\Models\ReleaseNote;
use App\Models\User;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $notifications = $request->user()
            ->notifications()
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Notifications/List', [
            'notifications' => $notifications,
        ]);
    }
}