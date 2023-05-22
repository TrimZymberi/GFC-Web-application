<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'city' => $data['city'],
            'address' => $data['address']
        ]);

        if (!$user) {
            return response()->json([
                'error' => 'Failed to create user.'
            ], 500);
        }

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response()->json([
                'error' => 'Invalid credentials.'
            ], 422);
        }

        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'error' => 'Failed to retrieve user.'
            ], 500);
        }

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'error' => 'User not authenticated.'
            ], 401);
        }

        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }

}