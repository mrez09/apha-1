<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use ImageKit\ImageKit;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

//use App\Http\Controllers\Admin\UploadController;

use Storage;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = fopen($request->file('file')->getPathname(), "r");
            $fileName = $request->file('file')->getClientOriginalName();

            $imageKit = new ImageKit(
                env('IMAGEKIT_PUBLIC'),
                env('IMAGEKIT_PRIVATE'),
                env('IMAGEKIT_URL_ENDPOINT')
            );

            $upload = $imageKit->upload([
                'file' => $file,
                'fileName' => $fileName,
            ]);

            return response()->json([
                'url' => $upload->success->url ?? null,
            ]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }
}