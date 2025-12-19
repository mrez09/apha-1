<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Notifications\ReleaseNotePublished;
use Illuminate\Http\Request;
use App\Models\ReleaseNote;
use App\Models\User;
use Inertia\Inertia;

class ReleaseNoteController extends Controller
{
    //
    public function index(Request $request)
    {
        $logs = ReleaseNote::query()
            ->when($request->search, function ($query, $search) {
                $query->where('version', 'like', "%{$search}%")
                    ->orWhere('title', 'like', "%{$search}%");
            })
            ->when($request->status !== null && $request->status !== '', function ($query) use ($request) {
                $query->where('status', $request->status);
            })
            ->when($request->sort, function ($query) use ($request) {

                $direction = $request->direction ?? 'asc';

                $allowedSort = [
                    'version',
                    'title',
                    'status',
                    'created_at',
                ];

                if (in_array($request->sort, $allowedSort)) {
                    $query->orderBy($request->sort, $direction);
                }

            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Changelog/List', [
            'logs' => $logs,
            'filters' => $request->only([
                'search',
                'status',
                'sort',
                'direction'
            ]),
        ]);
    }

    public function create()
    {
        //$lastVersion = ReleaseNote::latest('id')->value('version');
        //$lastVersion = ReleaseNote::orderByDesc('created_at')->value('version');
        $lastVersion = ReleaseNote::latest()->value('version');

        return Inertia::render('Admin/Changelog/Create', [
            'nextVersion' => $this->nextVersion($lastVersion),
        ]);
    }

    private function nextVersion($version)
    {
        if (!$version) {
            return 'v1.0.0';
        }

        preg_match('/v(\d+)\.(\d+)\.(\d+)/', $version, $matches);

        if (!$matches) {
            return 'v1.0.0';
        }

        $major = (int) $matches[1];
        $minor = (int) $matches[2];
        $patch = (int) $matches[3] + 1;

        return "v{$major}.{$minor}.{$patch}";
    }

    public function store(Request $request)
    {
        $request->validate([
            'version' => 'required|max:20|unique:release_notes,version',
            'title' => 'required|max:255',
            'description' => 'required',
            'status' => 'required|boolean',
        ]);

        ReleaseNote::create([
            'version' => $request->version,
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'created_by' => auth()->id(),
        ]);

        return redirect()
            ->route('admin.dashboard.changelog.index')
            ->with('success', 'Release Note berhasil ditambahkan.');
    }

    public function edit($id)
    {
        $releaseNote = ReleaseNote::findOrFail($id);

        return Inertia::render('Admin/Changelog/Edit', [
            'releaseNote' => $releaseNote,
        ]);
    }

    public function update(Request $request, $id)
    {
        $releaseNote = ReleaseNote::findOrFail($id);
        $oldStatus = $releaseNote->status;

        $request->validate([
            'version' => 'required|max:20|unique:release_notes,version,' . $releaseNote->id,
            'title' => 'required|max:255',
            'description' => 'required',
            'status' => 'required|boolean',
        ]);

        $releaseNote->update([
            'version' => $request->version,
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
        ]);
        

        if ($oldStatus != 1 && $releaseNote->status == 1) {

            $users = User::where('id', '!=', auth()->id())->get();

            \Log::debug('RELEASE NOTE PUBLISH', [
                'release_note_id' => $releaseNote->id,
                'old_status' => $oldStatus,
                'new_status' => $releaseNote->status,
                'current_user' => auth()->id(),
                'recipient_count' => $users->count(),
                'recipient_ids' => $users->pluck('id')->toArray(),
            ]);

            $users->each(function ($user) use ($releaseNote) {

                \Log::debug('SENDING RELEASE NOTE NOTIFICATION', [
                    'user_id' => $user->id,
                    'release_note_id' => $releaseNote->id,
                ]);

                $user->notify(
                    new ReleaseNotePublished($releaseNote)
                );
            });
        }
        

        return redirect()
            ->route('admin.dashboard.changelog.index')
            ->with('success', 'Release Note berhasil diperbarui.');
    }

    public function show($id)
    {
        $releaseNote = ReleaseNote::findOrFail($id);

        return Inertia::render('Admin/Changelog/Show', [
            'releaseNote' => $releaseNote,
        ]);
    }

    public function destroy($id)
    {
        $releaseNote = ReleaseNote::findOrFail($id);

        $releaseNote->delete();

        return redirect()
            ->route('admin.dashboard.changelog.index')
            ->with('success', 'Release Note berhasil dihapus.');
    }

    public function trash(Request $request)
    {
        $logs = ReleaseNote::onlyTrashed()
            ->when($request->search, function ($query, $search) {
                $query->where('version', 'like', "%{$search}%")
                    ->orWhere('title', 'like', "%{$search}%");
            })
            ->latest('deleted_at')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Changelog/Trash', [
            'logs' => $logs,
            'filters' => $request->only([
                'search',
            ]),
        ]);
    }

    public function restore($id)
    {
        $releaseNote = ReleaseNote::onlyTrashed()->findOrFail($id);

        $releaseNote->restore();

        return redirect()
            ->route('admin.dashboard.changelog.trash')
            ->with('success', 'Release Note berhasil dipulihkan.');
    }

    public function forceDelete($id)
    {
        $releaseNote = ReleaseNote::onlyTrashed()->findOrFail($id);

        $releaseNote->forceDelete();

        return redirect()
            ->route('admin.dashboard.changelog.trash')
            ->with('success', 'Release Note berhasil dihapus permanen.');
    }
}
