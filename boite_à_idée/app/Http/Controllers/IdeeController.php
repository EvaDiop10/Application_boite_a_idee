<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\idee;

class IdeeController extends Controller
{
    public function index(){
        return idee::All();
    }
    public function store(Request $request){
        return idee::create($request->all());
    }
}
