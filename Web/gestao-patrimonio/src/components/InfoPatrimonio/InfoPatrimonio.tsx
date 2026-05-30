import React, { useEffect, useState } from 'react'
import styles from '@/components/InfoPatrimonio/InfoPatrimonio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { carregarPatrimonio, obterPatrimonioPorId } from '@/pages/api/patrimonio';
import { converterData } from '@/utils/convercoes';
import { obterAmbientePorId } from '@/pages/api/ambiente';

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

type local = {
    localizacaoID: string,
    nomeLocal: string,
    localSAP: number,
    descricaoSAP: string,
    areaID: string,
    responsavel: string
}

const InfoPatrimono = (patrimonioRecebido: patrimonioMolde) => {
    const [ambiente, setAmbiente] = useState<local | null>(null)

    async function lerAmbiente() {
        const ambienteObitido = await obterAmbientePorId(String(patrimonioRecebido?.patrimonioID!))
        setAmbiente(ambienteObitido)
    }

    useEffect(() => {
        lerAmbiente();
    }, [])

    return (
        <main className={styles.page_content}>
            <section
                className="layout_guide"
                id={styles.page_detalhes}
                aria-labelledby="titulo-patrimonio"
            >
                <Link href="/patrimonios" className={styles.back_link}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </Link>
                <h1 id={styles.titulo_patrimonio}>Patrimônio: {patrimonioRecebido?.numeroPatrimonio}</h1>
                <article className={styles.patrimonio_card}>
                    <div className={styles.patrimonio_content}>
                        <dl>
                            <dt>denominacao</dt>
                            <dd>{patrimonioRecebido?.denominacao}</dd>
                        </dl>
                        <dl>
                            <dt>Data transferência</dt>
                            <dd>
                                <time dateTime="2026-02-09">{converterData(patrimonioRecebido.dataTransferencia)}</time>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Local Atual</dt>
                            <dd>Sem local</dd>
                        </dl>
                        <dl>
                            <dt>Status Atual</dt>
                            <dd>{patrimonioRecebido?.statusPatrimonioID}</dd>
                        </dl>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default InfoPatrimono;