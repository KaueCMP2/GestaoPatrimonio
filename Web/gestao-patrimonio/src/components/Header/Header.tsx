import React, { useEffect, useState } from 'react'
import styles from '@/components/Header/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { carregarUsuario } from '@/pages/api/authService';

type usuarioRecebido = {
    NIF: string,
    name: string,
    role: string,
    emailAddress: string,
}

const Header = () => {
    const [user, setUser] = useState<usuarioRecebido>()

    async function decodToken(){
        const tokendecoded = await carregarUsuario();
        setUser(tokendecoded);

    }
    
    // console.log(user?.name)

    useEffect(() => {
        // console.log(user)
        // console.log(user.name)

        decodToken();
    }, [])

    return (
        <header className={styles.topbar}>
            <nav className="layout_guide" id={styles.navbar} aria-label="Menu principal">
                <a href="#" className={styles.logo_link} aria-label="Página inicial">
                    <img src="../Logo Senai.png" alt="Logo SENAI" className={styles.logo} />
                </a>
                <ul className={styles.menu_list}>
                    <li>
                        <a href="#" className={styles.menu_link}>
                            Ambientes
                            <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.menu_link}>
                            Patrimônios
                        </a>
                    </li>
                </ul>
                <section className={styles.user_area} aria-label="Informações do usuário">
                    <button className={styles.user_icon} aria-label="Abrir perfil do usuário">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <div className={styles.user_info}>
                        <strong>{user?.name}</strong>
                        <span>{user?.emailAddress}</span>
                    </div>
                    <button className={styles.arrow_button} aria-label="Abrir opções da conta">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </section>
                <button className={styles.hamburguer} aria-label="Abrir opções de menu ">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>
        </header>

    )
}

export default Header;