class Funcionario {
    constructor(id, nome, cargo) {
        this._id = id;
        this._nome = nome;
        this._cargo = cargo;
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get cargo() {
        return this._cargo;
    }

    calculaSalario() {
        //supor 1000
        return 1000;
    }
}

class Gerente extends Funcionario {
    constructor(id, nome, cargo, quantidadeDeColaboradores) {
        super(id, nome, cargo);
        this._quantidadeDeColaboradores = quantidadeDeColaboradores;
    }

    get quantidadeDeColaboradores() {
        return this._quantidadeDeColaboradores;
    }

    calculaSalario() {
        //supor 100
        return 2000 + (100 * this._quantidadeDeColaboradores);
    }
}

const funcionario1 = new Funcionario(1, "João", "Desenvolvedor");
console.log(`Funcionário: ${funcionario1.nome}, Cargo: ${funcionario1.cargo}, Salário: R$${funcionario1.calculaSalario()}`);

const gerente1 = new Gerente(2, "Maria", "Gerente de Projetos", 5);
console.log(`Gerente: ${gerente1.nome}, Cargo: ${gerente1.cargo}, Salário: R$${gerente1.calculaSalario()}`);
