import React from 'react';
import Formulaire from './Formulaire';
const SectionFormulaire = () => {
    
    return (
        <div className="row ">
            <div className="col-6">
                <Formulaire></Formulaire>
            </div>
            <div className="col-6">
                <image src="/undraw_Collecting_re_lp6p.png" className='img-fluide'/>
            </div>
        </div>
    );
};

export default SectionFormulaire;