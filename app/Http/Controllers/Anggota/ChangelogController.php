<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleaseNote;
use Inertia\Inertia;

class ChangelogController extends Controller
{
    //
    public function index()
    {
        $logs = ReleaseNote::where('status', 1)
            ->latest()
            ->paginate(10);

        return Inertia::render('Anggota/Changelog/List', [
            'logs' => $logs,
        ]);
    }

    public function show($id)
    {
        $log = ReleaseNote::where('status', 1)
            ->findOrFail($id);

        return Inertia::render('Anggota/Changelog/Show', [
            'log' => $log,
        ]);
    }

    
}
