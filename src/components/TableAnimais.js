import React from 'react';
import TableAnimaisLinha from './TableAnimaisLinha';

function TableAnimais() {
    let animais = [
        {id: 1, nome: "Cacau", tipo: "Gato", raca: "Vira-Lata", idade: "5 anos", cor: "Preto"},
        {id: 2, nome: "Bandit", tipo: "Cachorro", raca: "Vira-Lata", idade: "10 anos", cor: "Malhado"},
        {id: 3, nome: "Balu", tipo: "Cachorro", raca: "Xitzu", idade: "3 anos", cor: "Malhado"},
        {id: 4, nome: "Cookie", tipo: "Cachorro", raca: "Lhaza", idade: "6 anos", cor: "Branco"},
        {id: 5, nome: "Cookie", tipo: "Cachorro", raca: "Lhaza", idade: "6 anos", cor: "Branco"},
        {id: 6, nome: "Cookie", tipo: "Cachorro", raca: "Lhaza", idade: "6 anos", cor: "Branco"},
    ];

    return (
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
                {animais.map(function(animal) {
                    return <TableAnimaisLinha key={animal.id} nome={animal.nome} tipo={animal.tipo} idade={animal.idade} raca={animal.raca} cor={animal.cor} />
                })}
            </tbody>
        </table>
    );
}

export default TableAnimais;