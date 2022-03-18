import React from 'react';
import Formulaire from './Formulaire';
import Image from './Image';
const SectionFormulaire = () => {
    
    return (
        <div class="row ">
            <div class="col-6">
                <Formulaire></Formulaire>
            </div>
           <div class="col-6">
                <Image></Image>
           </div>
        </div>
    );
};

export default SectionFormulaire;