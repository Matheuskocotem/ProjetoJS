class Pessoa {
    constructor(nome, endereco, email, telefone) {
        this._nome = nome;
        this._endereco = endereco;
        this._email = email;
        this._telefone = telefone;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(endereco) {
        this._endereco = endereco;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get telefone() {
        return this._telefone;
    }

    set telefone(telefone) {
        this._telefone = telefone;
    }
}

class Livro {
    constructor(nome, autor, numeroPaginas) {
        this._nome = nome;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
        this._disponivel = true;
        this._alugadoPor = null; 
    }

    get nome() {
        return this._nome;
    }

    get autor() {
        return this._autor;
    }

    get numeroPaginas() {
        return this._numeroPaginas;
    }

    get disponivel() {
        return this._disponivel;
    }

    get alugadoPor() {
        return this._alugadoPor;
    }

    alugar(pessoa) {
        if (this._disponivel) {
            this._disponivel = false;
            this._alugadoPor = pessoa;
            console.log(`${pessoa.nome} alugou o livro "${this._nome}".`);
        } else {
            console.log(`O livro "${this._nome}" já está alugado por ${this._alugadoPor.nome}.`);
        }
    }

    devolver() {
        if (!this._disponivel) {
            console.log(`${this._alugadoPor.nome} devolveu o livro "${this._nome}".`);
            this._disponivel = true;
            this._alugadoPor = null;
        } else {
            console.log(`O livro "${this._nome}" não está alugado.`);
        }
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
