
function inverterString(str: string): string {
    return str.split('').reverse().join('');
}

function contarVogais(str: string): number {
    let vogais: string[] = ['a', 'e', 'i', 'o', 'u'];
    let contador: number = 0;
    for (let char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}