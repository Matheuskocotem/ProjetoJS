
class Universidade {
    constructor(nome) {
        this.nome = nome;
    }

    informaNome() {
        return this.nome;
    }
}

class Pessoa {
    constructor(nome, diaNascimento, mesNascimento, anoNascimento) {
        this.nome = nome;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.idade = 0;
        this.universidade = null; // Inicialmente, a pessoa não está associada a nenhuma universidade
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

    associarUniversidade(universidade) {
        this.universidade = universidade;
    }

    informaUniversidade() {
        return this.universidade ? this.universidade.informaNome() : "Não associada a uma universidade";
    }

    informaNomeEUniversidade() {
        return `${this.nome} trabalha na ${this.informaUniversidade()}`;
    }
}

const uni1 = new Universidade("Universidade A");
const uni2 = new Universidade("Universidade B");


const pessoa1 = new Pessoa("Alice", 15, 6, 1990);
const pessoa2 = new Pessoa("Bob", 23, 11, 1985);

pessoa1.associarUniversidade(uni1);
pessoa2.associarUniversidade(uni2);

// (1 de Junho de 2024)
pessoa1.calculaIdade(1, 6, 2024);
pessoa2.calculaIdade(1, 6, 2024);

console.log(pessoa1.informaNomeEUniversidade());
console.log(pessoa2.informaNomeEUniversidade());

console.log(`${pessoa1.informaNome()} tem ${pessoa1.informaIdade()} anos.`);
console.log(`${pessoa2.informaNome()} tem ${pessoa2.informaIdade()} anos.`);

