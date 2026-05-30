import { api } from "./api";

export async function carregarAmbiente() {
    try {
        const response = await api.get("Localizacao");
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function obterAmbientePorId(id: string) {
    try {
        const response = await api.get("Localizacao/" + id);
        return response.data
    } catch (error: any) {
        throw new Error(
            error.response?.data?.title ||
            error.response?.data ||
            error.message ||
            "NIF ou senha invalidos."
        );
    }
}
