<?php

namespace App\Http\Requests\Admin\Guides;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'title'        => 'required|string|max:255|unique:guides,title',
            'category'     => 'required|string|max:100',
            'icon' => 'nullable|string|max:100',
            'visibility' => 'required|in:public,private',
            'youtube_url'  => 'required|url',
            'thumbnail'    => 'nullable|string|max:255',
            'description'  => 'nullable|string',
            'sort_order'   => 'nullable|integer',
            'status'       => 'required|boolean',
            'roles'        => 'required|array',
            'roles.*'      => 'exists:roles,id',
        ];
    }
}
