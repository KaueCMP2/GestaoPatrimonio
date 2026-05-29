import { carregarPatrimonio } from '@/pages/api/patrimonio'
import { faArrowRightArrowLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

type patrimonioMolde = {
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    imagem: string,
    dataTransferencia: Date,
    localizacaoID: string,
    statusPatrimonioID: string
}


const ItemPatrimonio = (patrimonioRecebido: patrimonioMolde) => {
    console.log(patrimonioRecebido)

    return (
        <tbody>
            <tr>
                <td>{patrimonioRecebido.numeroPatrimonio}</td>
                <td>{patrimonioRecebido.denominacao}</td>
                <td>{patrimonioRecebido.dataTransferencia.toString()}</td>
                <td>
                    <a href="#" aria-label="Ver detalhes do patrimonio">
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </a>
                </td>
                <td>
                    <a href="#" aria-label="Transferir patrimonio">
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    </a>
                </td>
            </tr>
        </tbody>)
}

export default ItemPatrimonio