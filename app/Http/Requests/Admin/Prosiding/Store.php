<?php

namespace App\Http\Requests\Admin\Prosiding;

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
            'name'     => 'required',
            'category'  => 'required',
            'url'     => 'nullable',
            'is_featured'  => 'nullable',
            'rating'  => 'nullable',
            'img'       => 'required|image',
            'decription'  => 'required',
        ];
    }
}
