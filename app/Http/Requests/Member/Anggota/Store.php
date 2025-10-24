<?php

namespace App\Http\Requests\Member\Anggota;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
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
            'nama'          => 'required',
            'kode'          => 'required',
            'phone'         => 'required',
            'alamat'        => 'required',
            'img'           => 'required|image',
            'jk'            => 'required',
            'universitas'   => 'required',
            'fakultas'      => 'required',
            'alamatf'       => 'required',
            'mk'            => 'required',
            'scholar'       => 'nullable',
            'scopus'        => 'nullable',
            'sinta'         => 'nullable',

            
            'email'         => 'required|unique:member,email',
            'email'         => 'required|unique:users,email',
            'password'      => 'required|confirmed',
        ];
    }
}
