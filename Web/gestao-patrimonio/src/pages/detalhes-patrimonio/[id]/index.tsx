import Header from '@/components/Header/Header';
import InfoPatrimono from '@/components/InfoPatrimonio/InfoPatrimonio';
import TabelaHistorico from '@/components/TabelaHistorico/TabelaHistorico';
import React, { useEffect, useState } from 'react'
import styles from '@/pages/detalhes-patrimonio/[id]/detalhes.module.css'
import { useParams } from 'next/navigation';
import { obterPatrimonioPorId } from '@/pages/api/patrimonio';

type patrimonioMolde = {
    dataTransferencia: Date,
    denominacao: string,
    imagem: string,
    localizacaoID: string,
    numeroPatrimonio: string,
    patrimonioID: string,
    statusPatrimonioID: string
    valor: number,
}

const detalhes = (patrimonioRecebido: patrimonioMolde) => {
    const [patrimonio, setPatrimonio] = useState<patrimonioMolde | null>(null);

    const params = useParams();
    const id = params?.id;

    async function lerPatrimonio() {
        const patrimonioObtido = await obterPatrimonioPorId(String(id))
        setPatrimonio(patrimonioObtido)
        console.log(patrimonio)
    }

    useEffect(() => {
        if (!id) return;

        setTimeout(() => {
            lerPatrimonio();
            console.log(patrimonio)
        }, 100)
    }, [id])

    return (
        <body id={styles.page_content}>
            <Header />
            {patrimonio !== null ?
                (
                    <InfoPatrimono
                        key={patrimonio!.patrimonioID}
                        patrimonioID={patrimonio!.patrimonioID}
                        numeroPatrimonio={patrimonio!.numeroPatrimonio}
                        denominacao={patrimonio.denominacao}
                        dataTransferencia={patrimonio.dataTransferencia}
                        localizacaoID={patrimonio.localizacaoID}
                        statusPatrimonioID={patrimonio.statusPatrimonioID}
                        valor={patrimonio.valor}
                        imagem={patrimonio.imagem} />
                ) : (
                    <p>Patrimonio não localizado...</p>
                )}
            < TabelaHistorico />
        </body>
    )
}

export default detalhes;