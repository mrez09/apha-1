<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Guides;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HelpCenterController extends Controller
{
    //
      private function guideQuery()
    {
        $query = Guides::query()
            ->where('status', 1)
            ->with('roles');

        if (!auth()->check()) {

            $query->where('visibility', 'public');

        } else {

            $roles = auth()->user()->roles->pluck('name');

            $query->where(function ($q) use ($roles) {

                $q->where('visibility', 'public')

                    ->orWhere(function ($qq) use ($roles) {

                        $qq->where('visibility', 'private')

                            ->whereHas('roles', function ($r) use ($roles) {

                                $r->whereIn('name', $roles);

                            });

                    });

            });

        }

        return $query;
    }

    public function index()
    {
        $firstGuide = $this->guideQuery()
            ->orderBy('category')
            ->orderBy('sort_order')
            ->first();

        if (!$firstGuide) {
            abort(404);
        }

        return redirect()->route('fronthelp.show', $firstGuide->slug);
    }

    public function show($slug)
    {
        $guides = $this->guideQuery()
            ->orderBy('category')
            ->orderBy('sort_order')
            ->get();

        $guide = $guides
            ->firstWhere('slug', $slug);

        abort_if(!$guide, 404);
        // Ambil guide dalam kategori yang sama
        $categoryGuides = $guides
            ->where('category', $guide->category)
            ->values();

        // Cari posisi guide sekarang
        $currentIndex = $categoryGuides->search(
            fn ($item) => $item->id == $guide->id
        );

        // Previous
        $previousGuide = $currentIndex > 0
            ? $categoryGuides[$currentIndex - 1]
            : null;

        // Next
        $nextGuide = $currentIndex < ($categoryGuides->count() - 1)
            ? $categoryGuides[$currentIndex + 1]
            : null;

        $nextCategoryGuide = $guides
            ->where('category', '!=', $guide->category)
            ->first();

        $categories = $guides
            ->pluck('category')
            ->unique()
            ->values();

        $currentCategoryIndex = $categories->search($guide->category);

        $nextCategory = $categories[$currentCategoryIndex + 1] ?? null;

        $nextCategoryGuide = $nextCategory
            ? $guides->firstWhere('category', $nextCategory)
            : null;

        return Inertia::render("Guide/List",[
            "guides"=>$guides,
            "selectedGuide"=>$guide,
            "previousGuide"=>$previousGuide,
            "nextGuide"=>$nextGuide,    
            "nextCategoryGuide"=> $nextCategoryGuide,    
        ]);
    }
}
