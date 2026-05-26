import React from 'react'
import styles from '@/components/ModalImportar/ModalImportar.module.css'

const ModalImportar = () => {
    return (
        <section className="modal-overlay">
            <article className="modal-container" id="modalImportar">
                <a href="#" className={styles.modal_close}>
                    x
                </a>
                <h1 className="modal-title">Importar novos patrimônios</h1>
                <form className="modal-form">
                    <div className="modal-field">
                        <label htmlFor="numeroPatrimonio">Número do patrimônio</label>
                        <input type="text" id={styles.numeroPatrimonio} placeholder="1245769" />
                    </div>
                    <div className={styles.modal_field}>
                        <label htmlFor="denominacaoPatrimonio">Denominação</label>
                        <input
                            type="text"
                            id={styles.denominacaoPatrimonio}
                            placeholder="CADEIRA GIRATÓRIA EM POLIPROPILENO PRETO"
                        />
                    </div>
                    <button className={styles.modal_button}>SALVAR IMPORTAÇÃO</button>
                </form>
            </article>
        </section>
    )
}

export default ModalImportar