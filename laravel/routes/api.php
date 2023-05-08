<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PreviewController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
 
Route::middleware('auth:sanctum')->group(function() {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('category', [CategoryController::class, 'index']);
Route::post('category', [CategoryController::class, 'store']);
Route::get('category/{id}', [CategoryController::class, 'show']);
Route::get('category/{id}/edit', [CategoryController::class, 'edit']);
Route::put('category/{id}/edit', [CategoryController::class, 'update']);
Route::delete('category/{id}/delete', [CategoryController::class, 'destroy']);

Route::get('preview', [PreviewController::class, 'index']);
Route::post('preview', [PreviewController::class, 'create']);
Route::put('preview/{id}/', [PreviewController::class, 'update']);
Route::get('preview/{id}/edit', [PreviewController::class, 'edit']);
Route::get('preview/{id}', [PreviewController::class, 'show']);
Route::delete('preview/{id}/delete', [PreviewController::class, 'destroy']);
Route::get('preview/search', [PreviewController::class, 'search']);
Route::get('/users/{id}/name', [PreviewController::class, 'getUserName']);

