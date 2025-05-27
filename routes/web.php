<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/components', function () {
    return Inertia::render('components');
});
Route::get('/animation', function () {
    return Inertia::render('animation');
});
Route::get('/color', function () {
    return Inertia::render('color');
});
Route::get('/developer', function () {
    return Inertia::render('developer');
});
Route::get('/illustrations', function () {
    return Inertia::render('illustrations');
});
Route::resource('posts', PostController::class);
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
