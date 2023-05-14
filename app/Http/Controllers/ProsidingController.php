<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Prosiding;

class ProsidingController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        $featuredProsiding   = Prosiding::whereIsFeatured(true)->get();
        $prosiding           = Prosiding::all();

        return inertia ('Prosiding/List',[
            'featuredProsiding'  => $featuredProsiding,
            'prosiding'          => $prosiding,
        ]);
        /*return  [
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }

    public function show(Prosiding $prosiding){
        return Inertia::render('Prosiding/Show', ['prosiding' => $prosiding]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }
}
