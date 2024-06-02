//Numero 1

class Pessoa {
    constructor(nome, diaNascimento, mesNascimento, anoNascimento) {
        this.nome = nome;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.idade = 0; 
    }

    calculaIdade(diaAtual, mesAtual, anoAtual) {
        let idade = anoAtual - this.anoNascimento;
        if (mesAtual < this.mesNascimento || (mesAtual === this.mesNascimento && diaAtual < this.diaNascimento)) {
            idade--;
        }
        this.idade = idade;
    }

    informaIdade() {
        return this.idade;
    }

    informaNome() {
        return this.nome;
    }

    ajustaDataDeNascimento(dia, mes, ano) {
        this.diaNascimento = dia;
        this.mesNascimento = mes;
        this.anoNascimento = ano;
    }
}

//obj
const pessoa1 = new Pessoa("Alice", 15, 6, 1990);
const pessoa2 = new Pessoa("Bob", 23, 11, 1985);

// (1 de Junho de 2024)
pessoa1.calculaIdade(1, 6, 2024);
pessoa2.calculaIdade(1, 6, 2024);

console.log(`${pessoa1.informaNome()} tem ${pessoa1.informaIdade()} anos.`);
console.log(`${pessoa2.informaNome()} tem ${pessoa2.informaIdade()} anos.`);


