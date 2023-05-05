<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;

use App\Http\Controllers\ProductListController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
 
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


Route::resource('product_list',ProductListController::class);
Route::get('/product_list/{id}', [ProductListController::class, 'show']);
Route::put('/product_list/{product}',[ProductListController::class, 'update']);
Route::delete('/product_list/{id}', [ProductListController::class, 'destroy']);
