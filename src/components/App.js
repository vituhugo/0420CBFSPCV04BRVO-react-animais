import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar'
import Footer from './Footer'
import TableAnimais from './TableAnimais'

function App() {
  return (
    <div className="App">
        <NavBar />
        <h1>Lista de Pets</h1>
        <TableAnimais />
        <Footer />
    </div>
  );
}

export default App;
