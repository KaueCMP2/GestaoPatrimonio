export function converterData(data: string) {
    return new Date(data).toLocaleDateString('pt-BR');
}
