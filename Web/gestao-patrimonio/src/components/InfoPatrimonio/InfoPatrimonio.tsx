import React from 'react'
import styles from '@/components/InfoPatrimonio/InfoPatrimonio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const InfoPatrimono = () => {
    return (
        <main className={styles.page_content}>
            <section
                className="layout_guide"
                id={styles.page_detalhes}
                aria-labelledby="titulo-patrimonio"
            >
                <Link href="/ambientes" className={styles.back_link}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </Link>
                <h1 id={styles.titulo_patrimonio}>Patrimônio: 1236808</h1>
                <article className={styles.patrimonio_card}>
                    <div className={styles.patrimonio_content}>
                        <dl>
                            <dt>Denominação</dt>
                            <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                        </dl>
                        <dl>
                            <dt>Tipo</dt>
                            <dd>Mesa</dd>
                        </dl>
                        <dl>
                            <dt>Data transferência</dt>
                            <dd>
                                <time dateTime="2026-02-09">09/02/2026</time>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Local Atual</dt>
                            <dd>Sala 09/10</dd>
                        </dl>
                        <dl>
                            <dt>Status Atual</dt>
                            <dd>Ativo</dd>
                        </dl>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default InfoPatrimono;