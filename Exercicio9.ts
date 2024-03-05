
function imprimirNumeroOuString(valor: number | string): void {
    console.log(valor);
}

function somaOuConcatena(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return `${a}${b}`;
    }
}