import React from 'react'
import styles from '@/components/TabelaHistorico/TabelaHistorico.module.css'
import ItemTabelaHistorico from '../ItemTabelaHistorico/ItemTabelaHistorico'

const TabelaHistorico = () => {
    return (
        <section
            className="layout_guide"
            id={styles.table_section}
            aria-label="Lista de histórico do patrimônio"
        >
            <h2>Histórico</h2>
            <table className={styles.history_table}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tipo de movimentação</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Responsável</th>
                        <th>Justificativa</th>
                    </tr>
                </thead>
                
                <ItemTabelaHistorico />
            </table>
        </section>
    )
}

export default TabelaHistorico