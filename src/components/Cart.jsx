import React from 'react';
import { Link } from 'react-router-dom';


const Cart = () => {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        <p>ACÁ NO HAY NADA. Aún</p>
        <Link to='/'> Volver al cátalogo</Link>
      </div>
    );
  };
  
  export default Cart;