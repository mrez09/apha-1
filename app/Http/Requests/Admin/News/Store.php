<?php

namespace App\Http\Requests\Admin\News;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Store extends FormRequest
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
            'judul'     => 'required',
            'tag'     => 'required',
            'category'  => 'required',
            'is_featured'  => 'required',
            'konten'  => 'nullable',
            'view'  => 'nullable',
            'img'       => 'required|image',
            'status'  => 'required',
            'ticker'  => 'required',
            'publish_at'       => 'required',
            
        ];
    }
}
