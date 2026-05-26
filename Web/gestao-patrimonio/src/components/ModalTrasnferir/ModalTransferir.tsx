import React from 'react'
import styles from '@/components/ModalTrasnferir/ModalTransferir.module.css'

const ModalTransferir = () => {
    return (
        <section className={styles.modal_overlay}>
            <article className="modal-container" id={styles.modalTransferir}>
                <a href="#" className={styles.modal_close}>
                    x
                </a>
                <h1 className={styles.modal_title}>Transferir os patrimônios</h1>
                <form className={styles.modal_form}>
                    <div className={styles.modal_field}>
                        <label htmlFor="ambienteTransferencia">Ambiente</label>
                        <select id={styles.ambienteTransferencia}>
                            <option>Manutenção</option>
                            <option>Sala XX</option>
                            <option>Sala XX</option>
                        </select>
                    </div>
                    <div className={styles.modal_field}>
                        <label htmlFor="motivoTransferencia">Motivo da transferência</label>
                        <textarea
                            id={styles.motivoTransferencia}
                            placeholder="Lorem"
                            defaultValue={""}
                        />
                    </div>
                    <button className={styles.modal_button}>TRANSFERIR</button>
                </form>
            </article>
        </section>
    )
}

export default ModalTransferir