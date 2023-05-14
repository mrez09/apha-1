<?php

namespace App\Http\Requests\Contact;

use Illuminate\Foundation\Http\FormRequest;
//use Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
        //return Auth::user()->hasRole('admin');
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
            'firstname'     => 'required',
            'lastname'     => 'nullable',
            'phone'  => 'nullable',
            'email'  => 'required',
            'message'  => 'required',
 
        ];
    }
}
