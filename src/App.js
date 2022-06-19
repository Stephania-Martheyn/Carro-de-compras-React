import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import {useState} from "react";
import Footer from "./components/Footer";

function App() {

  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="App">
      <Cabecera cantidad={cantidad} />
      <Listado setCantidad={setCantidad}/>
      <Footer/>
    </div>
  );
}

export default App;
