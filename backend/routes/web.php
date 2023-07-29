<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DealsController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\UsersController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/insert-categories', [CategoryController::class, 'insertMany']);

Route::post('/insert-category', [CategoryController::class, 'Userinsert']);

Route::get('/get-categories', [CategoryController::class, 'getCategories']);

Route::post('/insert-deals', [DealsController::class, 'insertMany']);

Route::post('/insert-deal', [DealsController::class, 'Userinsert']);

Route::get('/get-deals', [DealsController::class, 'getDeals']);

Route::get('/deals/{id}', [DealsController::class, 'getDealsbyCategory']);

Route::post('/insert-reviews', [ReviewsController::class, 'insertMany']);

Route::get('/reviews/{id}', [ReviewsController::class, 'getReviews']);

Route::post('/insert-review', [ReviewsController::class, 'insertReview']);

Route::get('/api-deals', [DealsController::class, 'fetchDealsFromApi']);

Route::get('/get-api-deals', [DealsController::class, 'getDealsUsingApi']);

Route::post('/add-api-deals', [DealsController::class, 'addApiDeals']);

Route::post('/add-user', [UsersController::class, 'addUser']);

Route::post('/login-user', [UsersController::class, 'loginUser']);