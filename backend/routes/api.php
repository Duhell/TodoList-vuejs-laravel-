<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([], function() {
    Route::apiResource('tasks',taskController::class);
});