import React, {useEffect, useState } from "react";
import axios from "axios";
import Carte from "./Carte";

//import { description, metrique } from "../atoms/description";
   
const ListeCarte = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:3000/idee')
        .then((response)=>setData(response.data));
        
    }, []);
    return(
        <div className="ListCarte">
            <ul  className="List-Carte">
                {data.map((idee)=>(
                    <Carte idee={idee} key={idee.id}></Carte>
                    ))}
            </ul>
        </div>)
        ;
};
export default ListeCarte;