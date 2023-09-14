<?php

namespace App\Http\Requests\Member\Profile;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Updateinstansi extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    //: bool
    {
        //return false;
        return Auth::user()->hasRole('user');
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
            'user_id'     => 'nullable',
            'anggota_id'     => 'nullable',
            'com_id'     => 'nullable',
            'no_kta'     => 'nullable',
            'nama'     => 'nullable',
            'kode'     => 'nullable',
            'jk'  => 'nullable',
            'img'       => 'nullable|image',
            'universitas'  => 'nullable',
            'fakultas'  => 'nullable',
            'alamatf'  => 'nullable',
            'mk'        => 'nullable',
            'alamat'  => 'nullable',
            'phone'       => 'nullable',
            'email'       => 'nullable',
            'scholar'        => 'nullable',
            'scopus'       => 'nullable',
            'sinta'  => 'nullable',
            'dec'  => 'nullable',
        ];
    }
}
