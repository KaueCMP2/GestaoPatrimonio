import React, { useEffect, useRef, useState } from 'react'
import styles from '@/pages/login/login.module.css'
import { fazerLogin } from '../api/authService';
import { toast } from 'react-toastify';
import { Router, useRouter } from 'next/router';

const login = () => {
  const [NIF, setNIF] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [isPass, setIsPass] = useState<boolean>(true)

  const [contador, setCount] = useState<number>(0)

  function visualizarSenha() {
    setIsPass(!isPass);
  }

  const notificacao = (msg: string) => toast.success(msg)
  const erro = (msg: string) => toast.error(msg)
  const router = useRouter();

  async function autenticar() {
    try {
      await fazerLogin(NIF, senha)
      notificacao("Login realizado com sucesso!")

      setTimeout(() => {
        router.push("/patrimonios")
      }, 2000)
    } catch (error: any) {
      erro(error.message)
    }
  }

  return (
    <main className={styles.login_page}>
      <section className={styles.login_banner} aria-label="Apresentação do sistema">
        <img
          src="../Imagem do login.png"
          alt="Imagem de fundo relacionada à tecnologia"
          className={styles.banner_image}
        />
        <div className={styles.banner_overlay} />
        <div className={styles.banner_content}>
          <img
            src="../Logo Senai.png"
            alt="Logo do SENAI"
            className={styles.senai_logo}
          />
          <h2>Gestão de patrimônios</h2>
          <p className={styles.banner_content_text}>
            Controle, organização e transparência do patrimônio com eficiência.
          </p>
          <p />
        </div>
      </section>
      <section className={styles.login_area} aria-label="Formulário de login">
        <form className={styles.login_form} >
          <h1>Login</h1>
          <div className={styles.form_group}>
            <label htmlFor="nif">NIF:</label>
            <input
              type="text"
              id="nif"
              name="nif"
              placeholder="Insira o seu NIF"
              required value={NIF}
              onChange={(e) => {
                setNIF(e.target.value)
              }}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="senha">Senha:</label>
            <div className={styles.password_field}>
              <input
                type={isPass ? "password" : "text"}
                id="senha"
                name="senha"
                placeholder="Insira a sua senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button onMouseDown={(e) => {
                e.preventDefault;
                visualizarSenha();
              }}
                onMouseUp={(e) => {
                  e.preventDefault();
                  setIsPass(true)
                }}
                type="button"
                className={styles.show_password}
                aria-label="Mostrar senha"

              >
                👁
              </button>
            </div>
          </div>
          <button type="submit" className={styles.login_button} onClick={(e) => {
            e.preventDefault();
            autenticar();
          }}>
            Entrar
          </button>
        </form>
      </section>
    </main>
  )
}


export default login;