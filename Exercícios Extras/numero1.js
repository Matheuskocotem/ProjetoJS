class Pessoa {
    constructor(nome, idade, pai, mae) {
        this.nome = nome;
        this.idade = idade;
        this.pai = pai;
        this.mae = mae;
    }
}

let paiJoao = new Pessoa("João", 60, null, null);
let maeMaria = new Pessoa("Maria", 55, null, null);
let filhoPedro = new Pessoa("Pedro", 30, paiJoao, maeMaria);

console.log(`Nome: ${filhoPedro.nome}`);
console.log(`Idade: ${filhoPedro.idade}`);
console.log(`Pai: ${filhoPedro.pai.nome}`);
console.log(`Mãe: ${filhoPedro.mae.nome}`);
