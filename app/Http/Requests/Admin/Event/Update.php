<?php

namespace App\Http\Requests\Admin\Event;

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
            'judul'         => 'required',
            'subjudul'      => 'required',
            'slug'          => 'nullable',
            'id_user'       => 'nullable',
            'tag'           => 'required',
            'img'           => 'nullable|image',
            'description'   => 'nullable',
            'view'          => 'nullable',
            'status'        => 'required',
            'is_featured'   => 'required',
            'eventdate_at'  => 'nullable',
            'enddate_at'    => 'nullable',
            
        ];
    }
}
