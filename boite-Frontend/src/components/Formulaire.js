
import { useState } from "react";

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
    <div className="row container">
        <form className='col-6' onSubmit={handleChangeSubmit}>
            <div className="mb-3 ">
                <label  className="form-label">titre</label>
                <input type="text" className="form-control"  placeholder="Exemple=Brief..." onChange={handleChangeTitre}></input>
            </div>
            <div className="mb-3">
                <label  className="form-label">Suggestion</label>
                <textarea className="form-control"  rows="3" onChange={handleChangeDescription}></textarea>
                    <p style={{color: ContenuRestant < 0 ?'red':'green'}}>Contenu saisi {ContenuSaisi.length}
                    <span>/130</span>
                    </p>
                    <p >Contenu restant {longueurMAx-ContenuSaisi.length}</p>

            </div> 
            <div className="mb-3">
                <button type="button" className="btn btn-secondary">Envoyer</button>
            </div>
        </form>
    </div>
    );
 }

 export default Formulaire;