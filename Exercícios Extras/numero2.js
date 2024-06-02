class Universidade {
    constructor(nome) {
        this.nome = nome;
        this.departamentos = [];
    }

    adicionarDepartamento(departamento) {
        this.departamentos.push(departamento);
    }

    listarDepartamentos() {
        console.log(`Departamentos da ${this.nome}:`);
        this.departamentos.forEach(departamento => {
            console.log(departamento.nome);
        });
    }
}

class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.pessoas = [];
    }

    adicionarPessoa(pessoa) {
        this.pessoas.push(pessoa);
    }

    listarPessoas() {
        console.log(`Pessoas do departamento de ${this.nome}:`);
        this.pessoas.forEach(pessoa => {
            console.log(pessoa.nome);
        });
    }
}

class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.departamento = null;
    }

    vincularDepartamento(departamento) {
        this.departamento = departamento;
        departamento.adicionarPessoa(this);
    }

    informarDepartamento() {
        if (this.departamento) {
            console.log(`${this.nome} está no departamento de ${this.departamento.nome}.`);
        } else {
            console.log(`${this.nome} não está vinculado a nenhum departamento.`);
        }
    }
}

const universidade = new Universidade("Universidade X");

const departamentoInformatica = new Departamento("Informática");
const departamentoMatematica = new Departamento("Matemática");

const pessoa1 = new Pessoa("João");
const pessoa2 = new Pessoa("Maria");

universidade.adicionarDepartamento(departamentoInformatica);
universidade.adicionarDepartamento(departamentoMatematica);

pessoa1.vincularDepartamento(departamentoInformatica);
pessoa2.vincularDepartamento(departamentoMatematica);

universidade.listarDepartamentos();
pessoa1.informarDepartamento();
pessoa2.informarDepartamento();
