// Superclasse Animal
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

// Subclasses específicas de animais
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

// Superclasse Humano
class Humano {
  constructor(nome, idade, endereco, contato) {
      this.nome = nome;
      this.idade = idade;
      this.endereco = endereco;
      this.contato = contato;
  }
}

// Subclasse Funcionario que herda de Humano
class Funcionario extends Humano {
  constructor(nome, idade, endereco, contato, salario) {
      super(nome, idade, endereco, contato);
      this.salario = salario;
  }
}

// Subclasses específicas de funcionários
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

// Classe Produto
class Produto {
  constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
  }
}

// Classe Venda
class Venda {
  constructor(humano, produtos) {
      this.humano = humano;
      this.produtos = produtos;
  }

  totalVenda() {
      return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }
}

// Instanciando objetos e testando o programa

// Criando humanos
let dono1 = new Humano("Carlos", 30, "Rua A, 123", "1234-5678");
let dono2 = new Humano("Maria", 25, "Rua B, 456", "8765-4321");

// Criando animais
let cachorro = new Cachorro("Rex", "Labrador", 4, "Marrom", 30, "Grande", dono1);
let gato = new Gato("Mimi", "Siamês", 4, "Cinza", 5, "Pequeno", dono2);
let passaro = new Passaro("Piu", "Canário", 2, "Amarelo", 0.05, "Pequeno", dono1);

// Testando o método falar
console.log(cachorro.falar()); // Latido
console.log(gato.falar());     // Miau
console.log(passaro.falar());  // Canto

// Criando funcionários
let balconista = new Balconista("Ana", 22, "Rua C, 789", "1111-2222", 2000);
let veterinario = new Veterinario("Dr. João", 45, "Rua D, 101", "3333-4444", 5000);
let vendedor = new Vendedor("Pedro", 28, "Rua E, 202", "5555-6666", 3000);

// Criando produtos
let produto1 = new Produto("Ração", 50);
let produto2 = new Produto("Brinquedo", 20);
let produto3 = new Produto("Coleira", 15);

// Criando uma venda
let venda = new Venda(dono1, [produto1, produto2, produto3]);

// Total da venda
console.log(venda.totalVenda()); // 85

// Imprimindo alguns dados para verificar
console.log(cachorro);
console.log(gato);
console.log(passaro);
console.log(balconista);
console.log(veterinario);
console.log(vendedor);
console.log(venda);
