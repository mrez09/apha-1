<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Session;
//model
use App\Models\Member;
use App\Models\Commitee;


class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => fn () => $request->user()
                    ? $request->user()->load('roles')
                    : null,
            ],

            /*//Member 2 join
            'member' => fn () => $request->user()
            ? Member::select(
                'id',
                'id_user',
                'slug_kta',
                'kta_token',
                'status'
            )
            ->where('id_user', $request->user()->id)
            ->first()
            : null,*/

            //Member 3 join
            'member' => fn () => $request->user()?->member()
            ->select(
                'id',
                'id_user',
                'id_com',
                'slug_kta',
                'kta_token',
                'status'
            )
            ->with([
                'committee:id,slug'
            ])
            ->first(),
            
 
            //Pesan
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'type'    => fn () => $request->session()->get('type'),
            ],

            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
