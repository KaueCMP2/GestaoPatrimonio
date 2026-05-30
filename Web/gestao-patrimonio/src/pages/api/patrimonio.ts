import { api } from "./api";

export async function carregarPatrimonio() {
    try {
        const response = await api.get("Patrimonio")
        return response.data;
    }
    catch (error: any) {
        throw new Error(error.message)
    }
}

export async function pagination(pagina?: number, porPagina?: number) {
    const dados: [] = await carregarPatrimonio();

    const paginaAtual = pagina || 1;
    const patrimonioPorPagina = porPagina || 10;

    const indiceInicial = paginaAtual! - 1 * patrimonioPorPagina!;
    const indiceFinal = paginaAtual! * patrimonioPorPagina!;
    const dadosCompletos = dados.splice(indiceInicial!, indiceFinal)

    return dadosCompletos;
}

export async function obterPatrimonioPorId(id: string) {
    try {
        const response = await api.get("Patrimonio/" + id);
        return response.data
    } catch (error: any) {
        throw new Error(error.message);
    }
}