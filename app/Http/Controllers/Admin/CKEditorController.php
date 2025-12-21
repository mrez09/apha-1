<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use ImageKit\ImageKit;

class CKEditorController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'upload' => ['required', 'image', 'max:10240'],
            'folder' => ['nullable', 'string', 'max:100'],
        ]);

        $file = $request->file('upload');

        $folder = $request->input('folder', 'ckeditor/news');

        $imageKit = new ImageKit(
            env('IMAGEKIT_PUBLIC'),
            env('IMAGEKIT_PRIVATE'),
            env('IMAGEKIT_URL_ENDPOINT')
        );

        $stream = fopen($file->getPathname(), 'r');

        $fileName = time() . '_' . $file->getClientOriginalName();

        $upload = $imageKit->upload([
            'file' => $stream,
            'fileName' => $fileName,
            'folder' => $folder,
        ]);

        if (!$upload->result || empty($upload->result->url)) {
            return response()->json([
                'error' => [
                    'message' => 'Gagal mengupload gambar ke ImageKit.'
                ]
            ], 500);
        }

        return response()->json([
            'url' => $upload->result->url,
        ]);
    }

    public function uploadFromUrl(Request $request)
    {
        $request->validate([
            'url' => ['required', 'url:http,https', 'max:2048'],
            'folder' => ['nullable', 'string', 'max:100'],
        ]);

        $url = $request->input('url');
        $folder = $request->input('folder', 'ckeditor/news');

        $host = parse_url($url, PHP_URL_HOST);

        if (!$host) {
            return response()->json([
                'error' => [
                    'message' => 'URL gambar tidak valid.',
                ],
            ], 422);
        }

        /*
        |--------------------------------------------------------------------------
        | Resolve hostname
        |--------------------------------------------------------------------------
        */

        $ip = gethostbyname($host);

        if (
            filter_var(
                $ip,
                FILTER_VALIDATE_IP,
                FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
            ) === false
        ) {
            return response()->json([
                'error' => [
                    'message' => 'URL tersebut tidak diizinkan.',
                ],
            ], 422);
        }

        try {
            /*
            |--------------------------------------------------------------------------
            | Download image
            |--------------------------------------------------------------------------
            */

            $response = \Illuminate\Support\Facades\Http::timeout(20)
                ->withHeaders([
                    'User-Agent' => 'APHA-ImageImporter/1.0',
                    'Accept' => 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
                ])
                ->get($url);

            if (!$response->successful()) {
                return response()->json([
                    'error' => [
                        'message' => 'Gambar tidak dapat diakses. HTTP ' .
                            $response->status(),
                    ],
                ], 422);
            }

            $body = $response->body();

            if (empty($body)) {
                return response()->json([
                    'error' => [
                        'message' => 'Gambar yang didownload kosong.',
                    ],
                ], 422);
            }

            /*
            |--------------------------------------------------------------------------
            | Maximum size 10 MB
            |--------------------------------------------------------------------------
            */

            if (strlen($body) > 10 * 1024 * 1024) {
                return response()->json([
                    'error' => [
                        'message' => 'Ukuran gambar terlalu besar. Maksimal 10 MB.',
                    ],
                ], 422);
            }

            /*
            |--------------------------------------------------------------------------
            | Detect actual image type
            |--------------------------------------------------------------------------
            */

            $imageInfo = @getimagesizefromstring($body);

            if ($imageInfo === false) {
                return response()->json([
                    'error' => [
                        'message' => 'File yang didownload bukan gambar yang valid.',
                    ],
                ], 422);
            }

            $mime = $imageInfo['mime'] ?? null;

            $allowedTypes = [
                'image/jpeg' => 'jpg',
                'image/png'  => 'png',
                'image/webp' => 'webp',
                'image/gif'  => 'gif',
            ];

            if (!isset($allowedTypes[$mime])) {
                return response()->json([
                    'error' => [
                        'message' => 'Format gambar tidak didukung: ' . $mime,
                    ],
                ], 422);
            }

            $extension = $allowedTypes[$mime];

            /*
            |--------------------------------------------------------------------------
            | Generate filename
            |--------------------------------------------------------------------------
            */

            $fileName = time() . '_' . uniqid() . '.' . $extension;

            /*
            |--------------------------------------------------------------------------
            | Upload to ImageKit
            |--------------------------------------------------------------------------
            */

            $imageKit = new ImageKit(
                env('IMAGEKIT_PUBLIC'),
                env('IMAGEKIT_PRIVATE'),
                env('IMAGEKIT_URL_ENDPOINT')
            );

            /*
            |--------------------------------------------------------------------------
            | IMPORTANT
            |--------------------------------------------------------------------------
            | ImageKit SDK lebih aman menerima base64 untuk binary content
            | pada alur ini.
            */

            $upload = $imageKit->upload([
                'file' => base64_encode($body),
                'fileName' => $fileName,
                'folder' => '/' . trim($folder, '/'),
            ]);

            if (
                !$upload ||
                !$upload->result ||
                empty($upload->result->url)
            ) {
                return response()->json([
                    'error' => [
                        'message' => 'Gagal mengupload gambar ke ImageKit.',
                    ],
                ], 500);
            }

            return response()->json([
                'url' => $upload->result->url,
            ]);
        } catch (\Throwable $e) {
            report($e);

            return response()->json([
                'error' => [
                    'message' => 'Gagal mengambil atau mengupload gambar.',
                ],
            ], 500);
        }
    }
}