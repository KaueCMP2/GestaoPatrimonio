import React from 'react'
import styles from '@/pages/patrimonios/patrimonios.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faCircleInfo, faSliders } from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header/Header'
import ItemPatrimonio from '@/components/ItemPatrimonio/ItemPatrimonio'

const index = () => {
    return (
        <>
            <Header />
            <main className="page-content">
                <section
                    className="layout_guide"
                    id={styles.page_header}
                    aria-labelledby="titulo-patrimonios"
                >
                    <h1 id={styles.titulo_patrimonios}>Patrimônios: Sala 09/10</h1>
                    <form className={styles.search_area} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.sr_only}>
                            Pesquisar patrimônios
                        </label>
                        <input
                            type="search"
                            id="pesquisa-ambiente"
                            name="pesquisaAmbiente"
                            placeholder="Pesquise o ambiente"
                        />
                        <button
                            type="button"
                            className={styles.filter_button}
                            aria-label="Filtrar patrimonios"
                        >
                            <FontAwesomeIcon icon={faSliders} />
                        </button>
                    </form>
                </section>
                <section
                    className="layout_guide"
                    id={styles.table_section}
                    aria-label="Lista de patrimonios"
                >
                    <table className={styles.environment_table}>
                        <thead>
                            <tr>
                                <th>Patrimônio</th>
                                <th>Denominação</th>
                                <th>Tipo</th>
                                <th>Data transfêrencia</th>
                                <th>Detalhes</th>
                                <th>Transferir</th>
                            </tr>
                        </thead>
                        <ItemPatrimonio />
                    </table>
                </section>
                <nav className={styles.pagination} aria-label="Paginação">
                    <button
                        type="button"
                        className={styles.pagination_button}
                        aria-label="Página anterior"
                    >
                        ‹
                    </button>
                    <a href="#" className={styles.pagination_link} id={styles.current} aria-current="page">
                        1
                    </a>
                    <a href="#" className={styles.pagination_link}>
                        2
                    </a>
                    <a href="#" className={styles.pagination_link}>
                        3
                    </a>
                    <button
                        type="button"
                        className={styles.pagination_button}
                        aria-label="Próxima página"
                    >
                        ›
                    </button>
                </nav>
            </main>
        </>
    )
}

export default index