
function somaArray(arr: number[]): number {
    let soma: number = 0;
    for (let num of arr) {
        soma += num;
    }
    return soma;
}

function maiorElemento(arr: number[]): number {
    let maior: number = arr[0];
    for (let num of arr) {
        if (num > maior) {
            maior = num;
        }
    }
    return maior;
}