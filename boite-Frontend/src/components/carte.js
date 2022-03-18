import React from 'react';

const Carte = (idee) => { 
       console.log(idee);
    return(
        <li className='Carte'>
            <div class ="d-flex justify-content-between mt-5 p-4 rounded-3 shadow-lg ">
                <div class="card-body ">
                    <h5 class="card-title fs-3">{idee.libelle}</h5>
                    <h6 class="card-subtitle mb-2 " >Approuvé/Rejeté</h6>
                    <p class="card-text">{idee.description}</p>
                <div class="d-flex justify-content-around">
                    <i class="bi bi-check-circle btn btn-success "></i>                 
                    <i class="bi bi-x-circle btn btn-danger"></i>   
                </div>
                </div>
            </div> 
        </li>
        
        
        );
     };
    
     export default Carte;