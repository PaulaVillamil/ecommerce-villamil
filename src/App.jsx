import { useState } from "react";
import Home from "./components/pages/home/Home";
import ItemList from "./components/pages/itemListContainer/ItemListContainer";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  const [saludo, setSaludo] = useState("Bienveni@s!");
  const [name, setName] = useState("Luisa");
  console.log(name);

  const cambiarSaludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };

  const cambiarNombre = (nuevoNombre) => {
    setName(nuevoNombre);
  };

  return (
    <div>
      <Navbar />
      <h1>Bienvenid@s!</h1>
      <Home nombre={"Luisa"} apellido={"Perez"} />
      <ItemList
        saludo={saludo}
        cambiarSaludo={cambiarSaludo}
        cambiarNombre={cambiarNombre}
      />
    </div>
  );
}

export default App;
