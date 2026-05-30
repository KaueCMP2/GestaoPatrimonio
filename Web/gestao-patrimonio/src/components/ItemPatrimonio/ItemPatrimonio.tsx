import { carregarPatrimonio } from '@/pages/api/patrimonio'
import { faArrowRightArrowLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
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
    return (
        <tbody>
            <tr>
                <td>{patrimonioRecebido.numeroPatrimonio}</td>
                <td>{patrimonioRecebido.denominacao}</td>
                <td>{patrimonioRecebido.dataTransferencia.toString()}</td>
                <td>
                    <Link href={"/detalhes-patrimonio/" + patrimonioRecebido.patrimonioID} aria-label="Ver detalhes do patrimonio">

                        <FontAwesomeIcon icon={faCircleInfo} />
                    </Link>
                </td>
                <td>
                    <Link href={"/detalhes-patrimonio/" + patrimonioRecebido.patrimonioID} aria-label="Transferir patrimonio">
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    </Link>
                </td>
            </tr>
        </tbody>)
}

export default ItemPatrimonio