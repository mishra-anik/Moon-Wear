import React from "react";
import { NavLink } from "react-router-dom";
const Navlink = () => {
  return (
    <nav className="flex justify-around bg-gray-800 text-white p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/cart">Cart</NavLink>

      <NavLink to="/about">About</NavLink>

    </nav>
  );
};

export default Navlink;
