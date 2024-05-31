<?php

class Animal {
    public $nome;
    public $raca;
    public $quantidadeDePatas;
    public $cor;
    public $peso;
    public $tamanho;
    public $humano;

    public function __construct($nome, $raca, $quantidadeDePatas, $cor, $peso, $tamanho, $humano) {
        $this->nome = $nome;
        $this->raca = $raca;
        $this->quantidadeDePatas = $quantidadeDePatas;
        $this->cor = $cor;
        $this->peso = $peso;
        $this->tamanho = $tamanho;
        $this->humano = $humano;
    }

    public function falar() {
        return "Som genérico de animal";
    }
}

class Cachorro extends Animal {
    public function falar() {
        return "Latido";
    }
}

class Gato extends Animal {
    public function falar() {
        return "Miau";
    }
}

class Passaro extends Animal {
    public function falar() {
        return "Canto";
    }
}

class Humano {
    public $nome;
    public $idade;
    public $endereco;
    public $contato;

    public function __construct($nome, $idade, $endereco, $contato) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->endereco = $endereco;
        $this->contato = $contato;
    }
}

class Funcionario extends Humano {
    public $salario;

    public function __construct($nome, $idade, $endereco, $contato, $salario) {
        parent::__construct($nome, $idade, $endereco, $contato);
        $this->salario = $salario;
    }
}

class Balconista extends Funcionario {
    public function __construct($nome, $idade, $endereco, $contato, $salario) {
        parent::__construct($nome, $idade, $endereco, $contato, $salario);
    }
}

class Veterinario extends Funcionario {
    public function __construct($nome, $idade, $endereco, $contato, $salario) {
        parent::__construct($nome, $idade, $endereco, $contato, $salario);
    }
}

class Vendedor extends Funcionario {
    public function __construct($nome, $idade, $endereco, $contato, $salario) {
        parent::__construct($nome, $idade, $endereco, $contato, $salario);
    }
}

class Produto {
    public $nome;
    public $preco;

    public function __construct($nome, $preco) {
        $this->nome = $nome;
        $this->preco = $preco;
    }
}

class Venda {
    public $humano;
    public $produtos;

    public function __construct($humano, $produtos) {
        $this->humano = $humano;
        $this->produtos = $produtos;
    }

    public function totalVenda() {
        $total = 0;
        foreach ($this->produtos as $produto) {
            $total += $produto->preco;
        }
        return $total;
    }
}

$animais = [];
$humanos = [];
$funcionarios = [];
$produtos = [];
$vendas = [];

function menu() {
    do {
        $opcao = readline(
            "1. Adicionar Humano\n" .
            "2. Adicionar Animal\n" .
            "3. Adicionar Funcionario\n" .
            "4. Adicionar Produto\n" .
            "5. Realizar Venda\n" .
            "6. Sair\n" .
            "Escolha uma opção: "
        );
        switch ($opcao) {
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
                echo "Saindo...\n";
                break;
            default:
                echo "Opção inválida!\n";
        }
    } while ($opcao !== "6");
}

function adicionarHumano() {
    global $humanos;
    $nome = readline("Nome: ");
    $idade = readline("Idade: ");
    $endereco = readline("Endereço: ");
    $contato = readline("Contato: ");
    $humano = new Humano($nome, $idade, $endereco, $contato);
    $humanos[] = $humano;
    echo "Humano adicionado com sucesso!\n";
}

function adicionarAnimal() {
    global $animais, $humanos;
    $tipo = readline("Tipo de animal (Cachorro, Gato, Passaro): ");
    $nome = readline("Nome: ");
    $raca = readline("Raça: ");
    $quantidadeDePatas = readline("Quantidade de patas: ");
    $cor = readline("Cor: ");
    $peso = readline("Peso: ");
    $tamanho = readline("Tamanho: ");
    $humanoIndex = readline("Índice do humano responsável: ");
    $humano = $humanos[$humanoIndex];

    switch (strtolower($tipo)) {
        case "cachorro":
            $animal = new Cachorro($nome, $raca, $quantidadeDePatas, $cor, $peso, $tamanho, $humano);
            break;
        case "gato":
            $animal = new Gato($nome, $raca, $quantidadeDePatas, $cor, $peso, $tamanho, $humano);
            break;
        case "passaro":
            $animal = new Passaro($nome, $raca, $quantidadeDePatas, $cor, $peso, $tamanho, $humano);
            break;
        default:
            echo "Tipo de animal inválido!\n";
            return;
    }
    $animais[] = $animal;
    echo "Animal adicionado com sucesso!\n";
}

function adicionarFuncionario() {
    global $funcionarios;
    $tipo = readline("Tipo de funcionário (Balconista, Veterinario, Vendedor): ");
    $nome = readline("Nome: ");
    $idade = readline("Idade: ");
    $endereco = readline("Endereço: ");
    $contato = readline("Contato: ");
    $salario = readline("Salário: ");

    switch (strtolower($tipo)) {
        case "balconista":
            $funcionario = new Balconista($nome, $idade, $endereco, $contato, $salario);
            break;
        case "veterinario":
            $funcionario = new Veterinario($nome, $idade, $endereco, $contato, $salario);
            break;
        case "vendedor":
            $funcionario = new Vendedor($nome, $idade, $endereco, $contato, $salario);
            break;
        default:
            echo "Tipo de funcionário inválido!\n";
            return;
    }
    $funcionarios[] = $funcionario;
    echo "Funcionário adicionado com sucesso!\n";
}

function adicionarProduto() {
    global $produtos;
    $nome = readline("Nome do produto: ");
    $preco = readline("Preço do produto: ");
    $produto = new Produto($nome, $preco);
    $produtos[] = $produto;
    echo "Produto adicionado com sucesso!\n";
}

function realizarVenda() {
    global $humanos, $produtos, $vendas;
    $humanoIndex = readline("Índice do humano comprador: ");
    $humano = $humanos[$humanoIndex];
    $produtosCompra = [];
    do {
        $produtoIndex = readline("Índice do produto a ser comprado: ");
        $produtosCompra[] = $produtos[$produtoIndex];
        $continuar = readline("Adicionar mais um produto? (s/n): ");
    } while (strtolower($continuar) === "s");

    $venda = new Venda($humano, $produtosCompra);
    $vendas[] = $venda;
    echo "Venda realizada com sucesso! Total: " . $venda->totalVenda() . "\n";
}

// Iniciar o menu
menu();

?>
