const ItemListContainer = ({ saludo, cambiarSaludo, cambiarNombre }) => {
  let nombreUsuario = "Luisa";

  return (
    <div>
      <h2>{saludo}</h2>
      <button onClick={() => cambiarNombre(nombreUsuario)}>
        Cambiar nombre
      </button>
    </div>
  );
};

export default ItemListContainer;
