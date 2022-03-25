
import axios from "axios";
import { useState } from "react";

const Formulaire = () =>{
    const longueurMAx = 130;
    const [ContenuSaisi,setContenuSaisi]=useState("");
    const [ContenuRestant,setContenuRestant]=useState(longueurMAx);
    const [libelle,setLibelle]=useState("");
    const [description,setDescription]=useState("");
    const [statut,setStatut]=useState(Boolean);
    
    const handleChangeTitre = (e)=>{
        setLibelle(e.target.value)
        setContenuSaisi(e.target.value)
        setContenuRestant(longueurMAx-ContenuSaisi.length)
    };
    const handleChangeDescription = (e)=>{
        setDescription(e.target.value)
        setContenuSaisi(e.target.value)
    }
   
    const Submit = ()=>{
        let idee = {libelle,description,statut}
         axios.post('http://127.0.0.1:8000/api/idees',idee)
    }
    return(
    <div className="row">
        <form className='' >
            <div className="mb-3 ">
                <label  className="form-label" >titre</label>
                <input type="text" value={libelle}  className="form-control" name="libelle"  placeholder="Exemple=Brief..." onChange= {handleChangeTitre} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Suggestion</label>
                <textarea className="form-control" value={description} name="description"  rows="3" onChange= {handleChangeDescription}></textarea>
                    <p style={{color: ContenuRestant < 0 ?'red':'green'}}>Contenu saisi {ContenuSaisi.length}
                        <span>/130</span>
                    </p>
                    <p >Contenu restant {longueurMAx-ContenuSaisi.length}</p>
            </div> 
            <div className="mb-3">
                <button type="button" className="btn btn-secondary" onClick={Submit}>Envoyer</button>
            </div>
        </form>
    </div>
    );
 }

 export default Formulaire;