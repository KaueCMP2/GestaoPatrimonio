import { carregarPatrimonio } from '@/pages/api/patrimonio'
import { faArrowRightArrowLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

type patrimonioRecebido = {
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    imagem: string,
    dataTransferencia: Date,
    localizacaoID: string,
    statusPatrimonioID: string
}

const ItemPatrimonio = () => {
    const [patrimonio, setPatrimonios] = useState<patrimonioRecebido | null>(null)
    
    async function letPatrimonio() {
        const leitura = await carregarPatrimonio();
        setPatrimonios(leitura) 
    }

    useEffect(() => {
        letPatrimonio();
        console.log(patrimonio);
    }, [])
    return (
        <tbody>
            <tr>
                <td>1236808</td>
                <td>MESA TRAPEZOIDAL DC-1987a</td>
                <td>Mesa</td>
                <td>11/02/26</td>
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