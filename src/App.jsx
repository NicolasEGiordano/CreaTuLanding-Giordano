import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import ProductDetailPage from './components/ProductDetailPage';  
import Cart from './components/Cart';  
import products from './data';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Catalog  products={products} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetailPage products={products} />}
        />
        <Route
          path="/cart"
          element={<Cart></Cart>}
        />  
      </Routes>
    </Router>
  );
};

export default App;