import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsFillCartCheckFill
        color="rgb(31, 64, 51)"
        size={40}
        title="Este es el carrito"
      />
      <span>4</span>
    </div>
  );
};

export default CartWidget;
