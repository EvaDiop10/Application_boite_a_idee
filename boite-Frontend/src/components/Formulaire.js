
import { useState } from "react";
import Image from "./Image";

const Formulaire = () =>{
    const longueurMAx = 130;
    const [ContenuSaisi,setContenuSaisi]=useState("");
    const [ContenuRestant,setContenuRestant]=useState(longueurMAx);
    const handleChangeDescription = (e)=>{
        setContenuSaisi(e.target.value)
        setContenuRestant(longueurMAx-ContenuSaisi.length)
    };
    const handleChangeTitre = (e)=>{
        setContenuSaisi(e.target.value)
    }
    const handleChangeSubmit= (e)=>{
        setContenuSaisi(e.target.value)
    }

    return(
    <div >
        <div class=" col-6">
            <form class='container' onSubmit={handleChangeSubmit}>
                <div class="mb-3 ">
                    <label  class="form-label">titre</label>
                    <input type="text" class="form-control"  placeholder="Exemple=Brief..." onChange={handleChangeTitre}></input>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Description</label>
                    <textarea class="form-control"  rows="3" onChange={handleChangeDescription}></textarea>
                        <p style={{color: ContenuRestant < 0 ?'red':'green'}}>Contenu saisi {ContenuSaisi.length}
                        <span>/130</span>
                        </p>
                        <p >Contenu restant {longueurMAx-ContenuSaisi.length}</p>

                </div> 
                <div class="mb-3">
                    <button type="button" class="btn btn-secondary">Envoyer</button>
                </div>
            </form>
        </div>
        <div class="col-6 ">
            <Image></Image>
        </div>
    </div>
    );
 }

 export default Formulaire;