
function mostrarDetalhes(pessoa: { nome: string, idade: number }): void {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}


function adicionarPropriedade(obj: any, chave: string, valor: any): any {
    let novoObjeto = { ...obj }; 
    novoObjeto[chave] = valor; 
    return novoObjeto;
}