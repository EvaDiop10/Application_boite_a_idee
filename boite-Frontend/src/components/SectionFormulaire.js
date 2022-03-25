import React from 'react';
import Formulaire from './Formulaire';
const SectionFormulaire = () => {
    
    return (
        <div className="row  container">
            <div className="col-6">
                <Formulaire></Formulaire>
            </div>
            <div className="col-6">
                <img src="/BoxIdea.png" className='img-fluid'/>
            </div>
        </div>
    );
};

export default SectionFormulaire;