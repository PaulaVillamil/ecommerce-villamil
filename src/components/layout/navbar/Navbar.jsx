import React from "react";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div class="header_desktop">
      <h2>Recreo</h2>
      <ul>
        <li>
          <a href="">Workshops</a></li>
        <li><a href="">Team Building</a></li>
        <li><a href="">Kids</a></li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
