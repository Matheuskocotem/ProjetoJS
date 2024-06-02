class Animal {
    constructor(nome, raca, quantidadeDePatas, cor, peso, tamanho, humano) {
        this.nome = nome;
        this.raca = raca;
        this.quantidadeDePatas = quantidadeDePatas;
        this.cor = cor;
        this.peso = peso;
        this.tamanho = tamanho;
        this.humano = humano;
    }

    falar() {
        return "Som genérico de animal";
    }
}

class Cachorro extends Animal {
    falar() {
        return "Latido";
    }
}

class Gato extends Animal {
    falar() {
        return "Miau";
    }
}

class Passaro extends Animal {
    falar() {
        return "Canto";
    }
}

class Humano {
    constructor(nome, idade, endereco, contato) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.contato = contato;
    }
}

class Funcionario extends Humano {
    constructor(nome, idade, endereco, contato, salario) {
        super(nome, idade, endereco, contato);
        this.salario = salario;
    }
}

class Balconista extends Funcionario {
    constructor(nome, idade, endereco, contato, salario) {
        super(nome, idade, endereco, contato, salario);
    }
}

class Veterinario extends Funcionario {
    constructor(nome, idade, endereco, contato, salario) {
        super(nome, idade, endereco, contato, salario);
    }
}

class Vendedor extends Funcionario {
    constructor(nome, idade, endereco, contato, salario) {
        super(nome, idade, endereco, contato, salario);
    }
}

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Venda {
    constructor(humano, produtos) {
        this.humano = humano;
        this.produtos = produtos;
    }

    totalVenda() {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
}

const animais = [];
const humanos = [];
const funcionarios = [];
const produtos = [];
const vendas = [];

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "1. Adicionar Humano\n" +
            "2. Adicionar Animal\n" +
            "3. Adicionar Funcionario\n" +
            "4. Adicionar Produto\n" +
            "5. Realizar Venda\n" +
            "6. Sair\n" +
            "Escolha uma opção:"
        );
        switch (opcao) {
            case "1":
                adicionarHumano();
                break;
            case "2":
                adicionarAnimal();
                break;
            case "3":
                adicionarFuncionario();
                break;
            case "4":
                adicionarProduto();
                break;
            case "5":
                realizarVenda();
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== "6");
}

function adicionarHumano() {
    let nome = prompt("Nome:");
    let idade = prompt("Idade:");
    let endereco = prompt("Endereço:");
    let contato = prompt("Contato:");
    let humano = new Humano(nome, idade, endereco, contato);
    humanos.push(humano);
    alert("Humano adicionado com sucesso!");
}

function adicionarAnimal() {
    let tipo = prompt("Tipo de animal (Cachorro, Gato, Passaro):");
    let nome = prompt("Nome:");
    let raca = prompt("Raça:");
    let quantidadeDePatas = prompt("Quantidade de patas:");
    let cor = prompt("Cor:");
    let peso = prompt("Peso:");
    let tamanho = prompt("Tamanho:");
    let humanoIndex = prompt("Índice do humano responsável:");
    let humano = humanos[humanoIndex];

    let animal;
    switch (tipo.toLowerCase()) {
        case "cachorro":
            animal = new Cachorro(nome, raca, quantidadeDePatas, cor, peso, tamanho, humano);
            break;
        case "gato":
            animal = new Gato(nome, raca, quantidadeDePatas, cor, peso, tamanho, humano);
            break;
        case "passaro":
            animal = new Passaro(nome, raca, quantidadeDePatas, cor, peso, tamanho, humano);
            break;
        default:
            alert("Tipo de animal inválido!");
            return;
    }
    animais.push(animal);
    alert("Animal adicionado com sucesso!");
}

function adicionarFuncionario() {
    let tipo = prompt("Tipo de funcionário (Balconista, Veterinario, Vendedor):");
    let nome = prompt("Nome:");
    let idade = prompt("Idade:");
    let endereco = prompt("Endereço:");
    let contato = prompt("Contato:");
    let salario = prompt("Salário:");

    let funcionario;
    switch (tipo.toLowerCase()) {
        case "balconista":
            funcionario = new Balconista(nome, idade, endereco, contato, salario);
            break;
        case "veterinario":
            funcionario = new Veterinario(nome, idade, endereco, contato, salario);
            break;
        case "vendedor":
            funcionario = new Vendedor(nome, idade, endereco, contato, salario);
            break;
        default:
            alert("Tipo de funcionário inválido!");
            return;
    }
    funcionarios.push(funcionario);
    alert("Funcionário adicionado com sucesso!");
}

function adicionarProduto() {
    let nome = prompt("Nome do produto:");
    let preco = prompt("Preço do produto:");
    let produto = new Produto(nome, preco);
    produtos.push(produto);
    alert("Produto adicionado com sucesso!");
}

function realizarVenda() {
    let humanoIndex = prompt("Índice do humano comprador:");
    let humano = humanos[humanoIndex];
    let produtosCompra = [];
    let continuar;
    do {
        let produtoIndex = prompt("Índice do produto a ser comprado:");
        produtosCompra.push(produtos[produtoIndex]);
        continuar = prompt("Adicionar mais um produto? (s/n)");
    } while (continuar.toLowerCase() === "s");

    let venda = new Venda(humano, produtosCompra);
    vendas.push(venda);
    alert(`Venda realizada com sucesso! Total: ${venda.totalVenda()}`);
}

// Iniciar o menu
menu();
