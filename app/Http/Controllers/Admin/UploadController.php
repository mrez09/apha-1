<?php
// app/Http/Controllers/UploadController.php
namespace App\Http\Controllers;
// routes/web.php
Route::post('/upload-imagekit', [UploadController::class, 'upload'])->name('upload.imagekit');



use Illuminate\Http\Request;
use ImageKit\ImageKit;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image|max:2048'
        ]);

        $imageKit = new ImageKit(
            env('IMAGEKIT_PUBLIC'),
            env('IMAGEKIT_PRIVATE'),
            env('IMAGEKIT_URL_ENDPOINT')
        );

        $file = fopen($request->file('file')->getPathname(), 'r');
        $upload = $imageKit->upload([
            'file' => base64_encode(file_get_contents($file)),
            'fileName' => $request->file('file')->getClientOriginalName(),
            'folder' => '/sertifikat'
        ]);

        return response()->json([
            'success' => true,
            'url' => $upload->result->url
        ]);
    }
}