<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ActivityLog;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


class ActivityLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $logs = ActivityLog::with([
            'user',
            'performedBy'
        ])
            ->latest()
            ->paginate(20);

        

        return Inertia::render(
            'Admin/ActivityLogs/Index',
            [
                'logs' => $logs
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $log = ActivityLog::with([
            'user',
            'performedBy',
            'loggable'
        ])
        ->findOrFail($id);

        //dd($log->toArray());


        return Inertia::render(
            'Admin/ActivityLogs/Show',
            [
                'log' => $log->toArray()
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
