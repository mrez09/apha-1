<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;
use App\Models\News;

class ContactController extends Controller
{
    //
    public function index()
    {
        $news           = News::all();
    return inertia ('Contact',[
            'news'          => $news,
        ]);
    }
    
}
