import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ItemAmbiente {
    localizacaoID: string,
    nomeLocal: string,
    responsavel: string[]
}

const ItemAmbiente = (ambiente : ItemAmbiente) => {
    return (
        <tbody>
            <tr>
                <td>{ambiente.nomeLocal}</td>
                <td>{ambiente.responsavel}</td>
                <td>
                    <a href="#" aria-label="Ver detalhes da Sala 30/31">
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </a>
                </td>
            </tr>
        </tbody>
    )
}

export default ItemAmbiente