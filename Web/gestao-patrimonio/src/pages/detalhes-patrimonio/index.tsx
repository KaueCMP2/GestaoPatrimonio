import Header from '@/components/Header/Header';
import InfoPatrimono from '@/components/InfoPatrimonio/InfoPatrimonio';
import TabelaHistorico from '@/components/TabelaHistorico/TabelaHistorico';
import React from 'react'
import styles from '@/pages/detalhes-patrimonio/detalhes.module.css'

const detalhes = () => {
    return (
        <body id={styles.page_content}>
            <Header />
            <InfoPatrimono />
            <TabelaHistorico />
        </body>
    )
}

export default detalhes;