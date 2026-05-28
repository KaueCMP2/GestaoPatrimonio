import React, { useEffect, useState } from 'react'
import styles from '@/pages/ambientes/ambientes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faSliders } from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header/Header'
import ItemAmbiente from '@/components/ItemAmbiente/ItemAmbiente'
import { carregarAmbiente } from '../api/ambiente'

type localRecebido = {
    localizacaoID: string,
    nomeLocal: string,
    responsavel: string[]
}

const index = () => {
    const [locais, setLocais] = useState<localRecebido[] | null>(null)

    async function pegarLocais() {
        const locaisRecebidos = await carregarAmbiente();
        setLocais(locaisRecebidos!)
        console.log(carregarAmbiente())
    }

    useEffect(() => {
        pegarLocais();
        console.log(locais)
    }, [])

    return (
        <>
            <Header />

            <main className="page_content">
                <section
                    className="layout_guide"
                    id={styles.page_header}
                    aria-labelledby="titulo-ambientes"
                >
                    <h1 id={styles.titulo_ambientes}>Ambientes</h1>
                    <form className={styles.search_area} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.sr_only}>
                            Pesquisar ambiente
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
                            aria-label="Filtrar ambientes"
                        >
                            <FontAwesomeIcon icon={faSliders} />
                        </button>
                    </form>
                </section>
                <section
                    className="table-section layout_guide"
                    aria-label="Lista de ambientes"
                >
                    <table className={styles.environment_table}>
                        <thead>
                            <tr>
                                <th>Local</th>
                                <th>Responsável</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        {locais?.length! > 0 ? locais?.map((item) => (
                            <ItemAmbiente
                                key={item.localizacaoID}
                                localizacaoID={item.localizacaoID}
                                nomeLocal={item.nomeLocal}
                                responsavel={item.responsavel} />
                        )) : <p>Carregando locais...</p>}
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