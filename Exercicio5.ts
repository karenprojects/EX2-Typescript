
function dobrarNumero(numero: number): number {
    return numero * 2;
}
function saudacaoHora(hora: number): string {
    if (hora < 12) {
        return "Bom dia";
    } else if (hora < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}