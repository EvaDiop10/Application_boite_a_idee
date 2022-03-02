import React, { useState, useEffect } from "react"
import axios from "axios"

const Listes = () =>{
    const [data,setdata] = useState([]);    

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/idees')
        .then((response)=>setdata(response.data));
        
        console.log(data);
    
    },[])
    return(<div className="List">
        <ul className="List-idees">
            {data.map((Liste)=>(
                <carte Liste={Liste} key={Liste.libelle} />
                ))}
        </ul>
    </div>)
};
export default Listes;