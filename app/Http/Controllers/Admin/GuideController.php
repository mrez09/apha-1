<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Guides;
use Inertia\Inertia;
use App\Http\Requests\Admin\Guides\Store;
use App\Http\Requests\Admin\Guides\Update;
use Storage;
use Spatie\Permission\Models\Role;

class GuideController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $guides = Guides::with('roles')
            ->latest()
            ->get();

        return Inertia::render('Admin/Guide/List', [
            'guides' => $guides,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::orderBy('name')->get();

        return Inertia::render('Admin/Guide/Create', [
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $guide = Guides::create([
            'title'        => $request->title,
            'slug'         => Str::slug($request->title),
            'icon' => $request->icon,
            'visibility' => $request->visibility,
            'category'     => $request->category,
            'youtube_url'  => $request->youtube_url,
            'thumbnail'    => $request->thumbnail,
            'description'    => $request->description,
            'sort_order'   => $request->sort_order ?? 0,
            'status'       => $request->status,
        ]);

        $guide->roles()->sync($request->roles);


        return redirect()
            ->route('admin.dashboard.guide.index')
            ->with('success', 'Guide berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $guide = Guides::with('roles')
            ->findOrFail($id);

        $roles = Role::all();

        return Inertia::render('Admin/Guide/Edit', [
            'guide' => $guide,
            'roles' => $roles,
        ]);
    }

    

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, $id)
    {
        $guide = Guides::findOrFail($id);
        $slug = Str::slug($request->title);

        $count = Guides::where('slug', 'like', "{$slug}%")
            ->where('id', '!=', $id)
            ->count();

        if ($count > 0) {
            $slug .= '-' . ($count + 1);
        }

        $guide->update([
            'title'        => $request->title,
            'slug'         => $slug,
            'icon'         => $request->icon,
            'visibility'   => $request->visibility,
            'category'     => $request->category,
            'youtube_url'  => $request->youtube_url,
            'thumbnail'    => $request->thumbnail,
            'description'  => $request->description,
            'sort_order'   => $request->sort_order ?? 0,
            'status'       => $request->status,
        ]);

        $guide->roles()->sync($request->roles);

        return redirect()
            ->route('admin.dashboard.guide.index')
            ->with([
                'type' => 'success',
                'message' => 'Guide berhasil diupdate.',
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $guide = Guides::findOrFail($id);

        $guide->roles()->detach();

        $guide->delete();

        return redirect()
            ->route('admin.dashboard.guide.index')
            ->with([
                'type' => 'success',
                'message' => 'Guide berhasil dihapus.',
            ]);
    }
}
