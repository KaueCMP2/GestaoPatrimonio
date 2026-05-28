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