<?php

namespace App\Helpers;

use ImageKit\ImageKit;

class ImagekitHelper
{
    public static function uploadImage($file)
    {
        $imageKit = new ImageKit(
            env('IMAGEKIT_PUBLIC'),
            env('IMAGEKIT_PRIVATE'),
            env('IMAGEKIT_URL_ENDPOINT')
        );

        $uploadFile = fopen($file->getRealPath(), 'r');

        $response = $imageKit->upload([
            "file" => $uploadFile,
            "fileName" => $file->getClientOriginalName(),
            "folder" => "/sertifikat"
        ]);

        if ($response->error) {
            throw new \Exception($response->error->message);
        }

        return $response->result->url;
    }
}