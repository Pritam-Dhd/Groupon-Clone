<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    public function addUser(Request $req)
    {
        $name = $req->input('name');
        $email = $req->input('email');
        $password = $req->input('password');

        // Check if the user with the provided email already exists in the database
        $userExists = DB::table('users')->where('email', $email)->exists();

        if ($userExists) {
            return response()->json(['message' => 'User with this email already exists.']);
        } else {
            // If the user does not exist, add the new user to the database
            $data = DB::table('users')->insert(['name' => $name, 'email' => $email, 'password' => $password]);
            if ($data) {
                return response()->json(['message' => 'User Created Successfully']);
            } else {
                return response()->json(['message' => 'Error creating user']);
            }
        }
    }
    
    function loginUser(Request $req)
    {
        $email = $req->input('email');
        $password = $req->input('password');

        // Check if the user with the provided email exists in the database
        $user = DB::table('users')->where('email', $email)->first();

        if (!$user) {
            return response()->json(['message' => 'User with this email does not exist.']);
        } else {
            // Verify the password
            if ($user->password === $password) {
                // Password is correct, return user details
                return response()->json(['message' => 'Login successful', 'user' => $user]);
            } else {
                return response()->json(['message' => 'Incorrect password']);
            }
        }
    }
}
