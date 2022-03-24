import React, {useEffect, useState } from "react";
import axios from "axios";
import Carte from "./Carte";

const ListeCarte = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/idees')
        .then((response)=>setData(response.data));
        
    }, []);
    let [Approuve,refuse]= [0,0]
    return(
        <div className="ListCarte">
            <ul  className="List-Carte">
                {data && data.map(idee=> {
                   idee.statut ? Approuve++ : refuse++;
                    return <Carte idee={idee} key={idee.id}/>
                    })
                }
            </ul>
        </div>)
        ;
};
export default ListeCarte;