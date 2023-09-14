<?php

namespace App\Http\Requests\Admin\Commitee;

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
            'nama'          => 'nullable',
            'divisi'        => 'nullable',
            'subdivisi'     => 'nullable',
            'jabatan'       => 'nullable',
            'description'   => 'nullable',
            'periode'       => 'nullable',
            'is_featured'   => 'nullable',
            'img'           => 'nullable|image',
            'join_at'       => 'nullable',
        ];
    }
}
