<?php

namespace App\Http\Requests\Member\Payment;

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
            'no_invoice'     => 'nullable',
            'judul'     => 'required',
            'subjudul'  => 'nullable',
            'img'       => 'required',
            //'status'  => 'required',
            'konten'  => 'nullable',
            'message'  => 'nullable',
            'is_featured'  => 'nullable',
            //'tanggal_bayar'       => 'nullable',
        ];
    }
}
