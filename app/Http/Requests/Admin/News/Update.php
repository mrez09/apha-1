<?php

namespace App\Http\Requests\Admin\News;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    //: bool
    {
        //return false;
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'judul'     => 'nullable',
            'tag'     => 'nullable',
            'category'  => 'nullable',
            'is_featured'  => 'nullable',
            'konten'  => 'nullable',
            'img'       => 'nullable|image',
            'publish_at'       => 'nullable',
            
        ];
    }
}
