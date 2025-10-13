<?php

namespace App\Http\Requests\Admin\Guides;

use Illuminate\Foundation\Http\FormRequest;
use Auth;
use Illuminate\Validation\Rule;

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
            'title' => [
            'required',
            'string',
            'max:255',
            Rule::unique('guides', 'title')->ignore($this->route('id')),
        ],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('guides', 'slug')->ignore($this->route('id')),
            ],
            'category'     => 'required|string|max:100',
            'youtube_url'  => 'required|url',
            'thumbnail'    => 'nullable|string|max:255',
            'description'    => 'nullable|string',
            'sort_order'   => 'nullable|integer',
            'status'       => 'required|boolean',
            'roles'        => 'required|array',
            'roles.*'      => 'exists:roles,id',
        ];
    }
}
