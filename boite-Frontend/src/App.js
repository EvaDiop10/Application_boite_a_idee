import Header from "./components/Header";
import Filtre from "./components/Filtre";
import SectionFormulaire from "./components/SectionFormulaire";


const App = () =>{
        return(
        <div className="Container">
                <Header></Header>
                <SectionFormulaire></SectionFormulaire>
                <Filtre/>
        </div>
        );
        }

 export default App;