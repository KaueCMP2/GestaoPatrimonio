import React from 'react'
import styles from '@/components/ItemTabelaHistorico/ItemTabelaHistorico.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const ItemTabelaHistorico = () => {
    return (
        <tbody id={styles.tbody}>
            <tr>
                <td data-label="Data">11/02/2026</td>
                <td data-label="Tipo de movimentação">
                    <span className={styles.status_badge}>Transferência</span>
                </td>
                <td data-label="Origem">Sala 07/08</td>
                <td data-label="Destino">Sala 09/10</td>
                <td data-label="Responsável">Gustavo Lima</td>
                <td data-label="Justificativa">
                    <a href="#" aria-label="Ver justificativa da transferência">
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </a>
                </td>
            </tr>
        </tbody >
    )
}

export default ItemTabelaHistorico