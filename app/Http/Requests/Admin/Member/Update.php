<?php

namespace App\Http\Requests\Admin\Member;

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
            'no_kta'        => 'nullable',
            'nama'          => 'nullable',
            'kode'          => 'nullable',
            'jk'            => 'nullable',
            'img'           => 'nullable|image',
            'img_kta'       => 'nullable|image',
            'universitas'   => 'nullable',
            'fakultas'      => 'nullable',
            'alamatf'       => 'nullable',
            'mk'            => 'nullable',
            'alamat'        => 'nullable',
            'phone'         => 'nullable',
            'email'         => 'nullable',
            'scholar'       => 'nullable',
            'scopus'        => 'nullable',
            'sinta'         => 'nullable',
            'kta_token'     => 'nullable',
            'dec'           => 'nullable',
            'start_date'    => 'nullable',
            'expired_date'  => 'nullable',
            'status'        => 'nullable',
            'iuran_status'  => 'nullable'
        ];
    }
}
