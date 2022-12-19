<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\storeTaskRequest;
use App\Http\Resources\Task\taskResource;
use Illuminate\Http\Request;
use App\Models\Task;

class taskController extends Controller
{
    public function index(){

        return taskResource::collection(Task::all());
    }

    public function show(Task $task){
        return new taskResource($task); 
    }

    public function store(storeTaskRequest $request){
        Task::create($request->validated());
        return response()->json("Task Created");

    }

    public function update(storeTaskRequest $request, Task $task){
        $task->update($request->validated());
        return response()->json("Task Updated");

    }

    public function destroy(Task $task){
        $task->delete();
        return response()->json("Task Deleted");

    }
}
