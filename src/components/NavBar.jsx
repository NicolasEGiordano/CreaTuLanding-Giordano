import React from 'react'

import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">No Logo sólo khlav kalash</div>
      <ul className="nav-links">
        <li><a href="Inicio">Inicio</a></li>
        <li><a href="Productos">Productos</a></li>
        <li><a href="Contacto">Contacto</a></li>
      </ul>
      <div className="cart-widget" />
    <CartWidget/>
    </nav>
  );
};


export default NavBar;