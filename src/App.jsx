import './App.css';
import React from 'react';
import Rifas from './components/Rifas/Rifas';
import Sorteo from './components/Sorteo/Sorteo';
import AppContext from './context/AppContext';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <div>
      <h1>Sistema de rifas</h1>
      <AppContext>
        <Formulario />
        <Rifas />
        <Sorteo />
      </AppContext>
    </div>
  );
}

export default App;
