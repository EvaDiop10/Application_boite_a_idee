import React, { useState } from "react"
import Formulaire from "./components/Formulaire";
import Header from "./components/Header";
import ListeCarte from "./components/ListeCarte";


const App = () =>{
        return(
        <div className="Container">
                <Header></Header>
                <Formulaire></Formulaire>
                <ListeCarte></ListeCarte>
        </div>
        );
        }

 export default App;