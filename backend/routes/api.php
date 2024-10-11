<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/products', function () {
    $response = Http::get(env('DUMMY_PRODUCT_LIST_ENDPOINT'));
    return $response->json();
});
