import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';



  const ProductDetailPage = ({ products }) => {
    const { productId } = useParams();
    const product = products.find((p) => p.id === parseInt(productId, 10));
  
    if (!product) {
      return <div>No se encontró el producto.</div>;
    }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Más al respecto:{product.descriptionLarga}</p>
      <p> </p>     
      <Link to='/'>Volver a inicio</Link>
      <p> </p>
      <Link to ='/cart'>Ir al carrito</Link>
    </div>
  );
};

export default ProductDetailPage;