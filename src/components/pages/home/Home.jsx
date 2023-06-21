import { useState } from "react";

const Home = ({ nombre, apellido }) => {
  const [contador, setContador] = useState(0);
  const [name, setName] = useState("Luisa");

  const sumar = (num) => {
    setContador(contador + num);
  };

  return (
    <>
      <h1>
        {nombre} {apellido}
      </h1>
      <h1>Bienvenid@ {name}!</h1>
      <button onClick={() => setName("Maria")}>Cambiar a Maria</button>
      <h3>Cantidad de articulos: {contador}</h3>
      <button onClick={() => sumar(4)}>Sumar en 4</button>
      <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
    </>
  );
};

export default Home;
