import React, { useState, useEffect } from "react";
import axios from "axios";
import Carte from "./Carte";

const ListeCarte = () => {
    const [data,setdata] = useState([]);    

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/idees')
        .then((response)=>setdata(response.data));
        
        console.log(data);
    }, []);
        return(
        <div className="ListCarte">
                {data.map((listCarte)=>(
                    <div className="listCarte">
                        {listCarte}
                    </div>
                    ))}
        </div>)
        ;
};
export default ListeCarte;