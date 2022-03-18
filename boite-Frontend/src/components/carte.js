import React from 'react';

const Carte = ({idee}) => { 
       
    return(
    <div>
        <h1>Liste des propositions</h1>
        <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-outline-secondary">Tous</button>
        <button type="button" class="btn btn-outline-success">Approuvé</button>
        <button type="button" class="btn btn-outline-danger">Refusé</button>
        </div>
        <div class ="d-flex justify-content-between mt-5 p-4 rounded-3 shadow-lg ">
            <div class="card-body ">
                    <h5 class="card-title fs-3">{idee.libelle}</h5>
                    <h6 class="card-subtitle mb-2 " >Approuvé/Rejeté</h6>
                    <p class="card-text">{idee.description}</p>
                <div class="d-flex justify-content-around">
                    <i class="bi bi-check-circle btn btn-success "> {idee.statut}</i>                 
                    <i class="bi bi-x-circle btn btn-danger">{idee.statut}</i>   
                </div>
            </div>
        </div> 
    </div>       
        );
     };
    
     export default Carte;