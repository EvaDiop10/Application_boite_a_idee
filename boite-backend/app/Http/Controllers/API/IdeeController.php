<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Idee;
use Illuminate\Http\Request;

class IdeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         // On récupère les idees
    $idee = Idee::all();

    // On retourne les informations des idees en JSON
    return response()->json($idee);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,Idee $idee)
    {
        // On crée un nouvel utilisateur
    $idee = Idee::create([
        'libelle' => $request->libelle,
        'description' => $request->description,
        'statut' => $request->statut
    ]);

    // On retourne les informations du nouvel idee en JSON
    return response()->json($idee, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Idee  $idee
     * @return \Illuminate\Http\Response
     */
    public function show(Idee $idee)
    {
       // On retourne les informations de l'utilisateur en JSON
    return response()->json($idee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Idee  $idee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Idee $idee)
    {
        
    // On modifie les informations de l'utilisateur
    $idee->update([
        'libelle' => $idee->libelle,
        'description' => $idee->description,
        'statut' => $idee->statut
    ]);

    // On retourne la réponse JSON
    return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Idee  $idee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Idee $idee)
    {
        //
    }
}
