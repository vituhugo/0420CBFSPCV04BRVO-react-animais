import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
        <NavBar />

        <h1>Lista de Pets</h1>

        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Idade</th>
                    <th>Raça</th>
                    <th>Cor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A gata</td>
                    <td>Gato</td>
                    <td>1 ano</td>
                    <td>Persa</td>
                    <td>Branco e preto</td>
                </tr>
                <tr>
                    <td>A gata</td>
                    <td>Gato</td>
                    <td>1 ano</td>
                    <td>Persa</td>
                    <td>Branco e preto</td>
                </tr>
                <tr>
                    <td>A gata</td>
                    <td>Gato</td>
                    <td>1 ano</td>
                    <td>Persa</td>
                    <td>Branco e preto</td>
                </tr>
                <tr>
                    <td>A gata</td>
                    <td>Gato</td>
                    <td>1 ano</td>
                    <td>Persa</td>
                    <td>Branco e preto</td>
                </tr>
                <tr>
                    <td>A gata</td>
                    <td>Gato</td>
                    <td>1 ano</td>
                    <td>Persa</td>
                    <td>Branco e preto</td>
                </tr>
            </tbody>
        </table>
        
        <Footer />
    </div>
  );
}

export default App;
