import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer message="¡Ups! Aquí no hay nada aún" />
    </div>
  );
}

export default App;