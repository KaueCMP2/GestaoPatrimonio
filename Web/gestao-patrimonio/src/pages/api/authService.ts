import secureLocalStorage from "react-secure-storage";
import { api } from "./api";
import { jwtDecode } from "jwt-decode";
import { Rethink_Sans } from "next/font/google";

type usuarioRecebido = {
    NIF: string,
    name: string,
    role: string,
    emailAddress: string,
}

export async function fazerLogin(NIF: string, senha: string) {
    try {
        const response = await api.post("Autenticacao/login", { NIF, senha })
        const token = response.data.token;

        secureLocalStorage.setItem("Token", token)
    } catch (error: any) {
        //! Gerei com o chat essa linha de comando
        throw new Error(
            error.response?.data?.title ||
            error.response?.data ||
            error.message ||
            "NIF ou senha invalidos."
        );
    }
}

export async function carregarUsuario() {
    const token = secureLocalStorage.getItem("Token");

    if (!token)
        return;

    const usuario = jwtDecode(token.toString()) as any;
    console.log(usuario)

    const tokenDecodificado: usuarioRecebido = {
        name : usuario["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        emailAddress : usuario["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
        NIF : usuario["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
        role : usuario["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    }

    console.log(tokenDecodificado)
    return (tokenDecodificado)
}