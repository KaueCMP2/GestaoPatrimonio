import React from 'react'
import styles from '@/components/ModalOverlay/ModalOverlay.module.css'

const ModalOverlay = () => {
    return (
        <section className="modal-overlay">
            <article className={styles.modal_container} id={styles.modal_justificativa}>
                <a href="#" className={styles.modal_close}>
                    x
                </a>
                <h1 className={styles.modal_title}>Justificativa</h1>
                <p className={styles.modal_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quasi
                    distinctio! Temporibus similique expedita laboriosam, assumenda officia
                    veritatis amet doloremque esse obcaecati repudiandae architecto in sed
                    facilis quas harum.
                </p>
            </article>
        </section>
    )
}

export default ModalOverlay