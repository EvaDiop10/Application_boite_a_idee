import Formulaire from "./components/Formulaire";
import Header from "./components/Header";
import Filtre from "./components/Filtre";


const App = () =>{
        return(
        <div className="Container">
                <Header></Header>
                <Formulaire></Formulaire>
                <Filtre/>
        </div>
        );
        }

 export default App;