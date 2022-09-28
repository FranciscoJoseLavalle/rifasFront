import './App.css';
import React from 'react';
import AppContext from './context/AppContext';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <h1>Sistema de rifas</h1>
      <AppContext>
        <Main />
      </AppContext>
    </div>
  );
}

export default App;
