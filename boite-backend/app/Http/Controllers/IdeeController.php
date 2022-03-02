<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\idee;

class IdeeController extends Controller
{
    public function index()
    {
        $idees = Idee::all();
        
        return response()->json($idees);
        
    }
    
    public function store(Request $request)
    {
        $idee = Idee::create([
            'libelle' => $request->libelle,
            'description' => $request->description,
            'statut' =>0
        ]);
        
        return response()->json($idee,201);
    }
    
    public function show(Idee $idee)
    {
        return Response()->json($idee);
    }
    
    public function update(Request $request, Idee $idee)
    {
        $idee->update([
            'libelle' =>$request->libelle,
            'description' =>$request->description,
            'statut'=>0
        ]);
        return Response()->json();
    }
    public function destroy(Idee $idee) 
    { 
        $idee->delete();
        return response()->json();
    }
}
