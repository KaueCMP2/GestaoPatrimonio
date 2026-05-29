import { carregarPatrimonio } from '@/pages/api/patrimonio';
import React, { useEffect, useState } from 'react'
import styles from '@/pages/patrimonios/patrimonios.module.css'
import ItemPatrimonio from '../ItemPatrimonio/ItemPatrimonio';


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

const leitura: any = carregarPatrimonio();

export const ListaDePatrimonios = () => {
    const [patrimonio, setPatrimonios] = useState<patrimonioMolde[] | null>(leitura)

        async function pegarPatrimonios() {
            const patrimoniosRecebidos = await carregarPatrimonio();
            setPatrimonios(patrimoniosRecebidos!)
            console.log(carregarPatrimonio())
        }
    

    useEffect(() => {
        pegarPatrimonios()
    }, [])

    return (
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
                        <th>Data transfêrencia</th>
                        <th>Detalhes</th>
                        <th>Transferir</th>
                    </tr>
                </thead>

                {patrimonio?.length! > 0 ? patrimonio?.map((item) => (
                    <ItemPatrimonio
                        key={item.patrimonioID}
                        patrimonioID={item.patrimonioID}
                        numeroPatrimonio={item.numeroPatrimonio}
                        denominacao={item.denominacao}
                        dataTransferencia={item.dataTransferencia}
                        localizacaoID={item.localizacaoID}
                        statusPatrimonioID={item.statusPatrimonioID}
                        valor={item.valor}
                        imagem={item.imagem} />
                )) : (<tbody>
                    <tr>
                        <td style={{ backgroundColor: 'transparent', padding: '0' }} colSpan={4} className="text-center">
                            Nenhum patrimonio localizado...
                        </td>
                    </tr>
                </tbody>)
                }
            </table>
        </section>
    )
}
