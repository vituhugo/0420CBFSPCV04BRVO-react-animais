import React from 'react'

function TableAnimaisLinha(props) {
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.tipo}</td>
            <td>{props.idade}</td>
            <td>{props.raca}</td>
            <td>{props.cor}</td>
        </tr>
    )
}

export default TableAnimaisLinha;