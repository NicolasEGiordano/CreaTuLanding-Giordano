import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = ({ products}) => {
  const onAddToCart = () =>{
    console.log("Je aún no hace nada che");
  }
  
  
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-detail">
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
            <p></p>
            <Link to={`/product/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
      <p></p>
      <Link to ='/cart'>Ir al carrito</Link>
    </div>
  );
};

export default Catalog;