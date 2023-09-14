<?php

namespace App\Http\Requests\Admin\Sertifikat;

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
            'no'            => 'nullable',
            'nama'          => 'required',
            'judul'         => 'nullable',
            'status'        => 'nullable',
            'id_user'       => 'nullable',
            'category'      => 'nullable',
            'img'           => 'nullable',
            'link'          => 'nullable',
            'konten'        => 'nullable',
            'view'          => 'nullable',
            'publish_at'    => 'nullable',
            
        ];
    }
}
