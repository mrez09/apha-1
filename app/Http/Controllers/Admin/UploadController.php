<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use ImageKit\ImageKit;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Sertifikat;

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
                'success' => true,
            'img' => $upload->result->url, // ganti jadi "img"
            ]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }

    public function deleteImage($id)
    {
        $sertifikat = Sertifikat::findOrFail($id);

        if ($sertifikat->img) {
            

            $sertifikat->img = null; // kosongkan kolom img
            $sertifikat->save();
        }

        return response()->json(['message' => 'Gambar dihapus'], 200);
    }

    public function uploadGuide(Request $request)
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
                'success' => true,
                'thumbnail' => $upload->result->url, // ganti jadi "img"
            ]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }

    public function deleteImage_guide($id)
{
    $guide = Guides::findOrFail($id);

    $guide->thumbnail = null;
    $guide->save();

    return response()->json([
        'success' => true,
        'message' => 'Thumbnail berhasil dihapus.'
    ]);
}
}