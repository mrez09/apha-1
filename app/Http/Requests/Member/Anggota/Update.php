<?php

namespace App\Http\Requests\Member\Anggota;

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
        return false;
        //return Auth::user()->hasRole('user');
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

            //'no_kta'        => 'nullable',
            'nama'          => 'nullable',
            'kode'          => 'nullable',
            'phone'         => 'nullable',
            'alamat'        => 'nullable',
            'img'           => 'nullable|image',
            'img_kta'       => 'nullable|image',
            'jk'            => 'required',
            //'dec'           => 'nullable'
        ];
    }
}
