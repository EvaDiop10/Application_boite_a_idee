<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IdeeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//Route::resource('idees','IdeeController');
Route::get('/idees',[IdeeController::class,'index']);
Route::post('/idees',[IdeeController::class,'store']);
Route::get('/idees/{idee}',[IdeeController::class,'show']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
