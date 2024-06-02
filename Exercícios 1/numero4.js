class Pessoa {
    constructor(nome, endereco, email, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
    }

    informaNome() {
        return this.nome;
    }

    informaEndereco() {
        return this.endereco;
    }

    informaEmail() {
        return this.email;
    }

    informaTelefone() {
        return this.telefone;
    }
}

class Livro {
    constructor(nome, autor, numeroPaginas) {
        this.nome = nome;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
        this.disponivel = true;
        this.alugadoPor = null; // Referência à pessoa que alugou o livro
    }

    alugar(pessoa) {
        if (this.disponivel) {
            this.disponivel = false;
            this.alugadoPor = pessoa;
            console.log(`${pessoa.informaNome()} alugou o livro "${this.nome}".`);
        } else {
            console.log(`O livro "${this.nome}" já está alugado por ${this.alugadoPor.informaNome()}.`);
        }
    }

    devolver() {
        if (!this.disponivel) {
            console.log(`${this.alugadoPor.informaNome()} devolveu o livro "${this.nome}".`);
            this.disponivel = true;
            this.alugadoPor = null;
        } else {
            console.log(`O livro "${this.nome}" não está alugado.`);
        }
    }

    informaNome() {
        return this.nome;
    }

    informaAutor() {
        return this.autor;
    }

    informaNumeroPaginas() {
        return this.numeroPaginas;
    }

    estaDisponivel() {
        return this.disponivel;
    }

    informaAlugadoPor() {
        return this.alugadoPor ? this.alugadoPor.informaNome() : "Ninguém";
    }
}

const pessoa1 = new Pessoa("Alice", "Rua A, 123", "alice@example.com", "1234-5678");
const pessoa2 = new Pessoa("Bob", "Rua B, 456", "bob@example.com", "8765-4321");

const livro1 = new Livro("Livro A", "Autor A", 200);
const livro2 = new Livro("Livro B", "Autor B", 150);

livro1.alugar(pessoa1);
livro2.alugar(pessoa2);

livro1.alugar(pessoa2);

livro1.devolver();
livro2.devolver();

livro1.devolver();
