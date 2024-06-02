class Pessoa {
    constructor(nome, endereco, email, telefone) {
        this._nome = nome;
        this._endereco = endereco;
        this._email = email;
        this._telefone = telefone;
        this._livrosAlugados = [];
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

    alugarLivro(livro) {
        if (livro.disponivel) {
            livro.alugar(this);
            this._livrosAlugados.push(livro);
        } else {
            console.log(`O livro "${livro.nome}" já está alugado.`);
        }
    }

    devolverLivro(livro) {
        const index = this._livrosAlugados.indexOf(livro);
        if (index !== -1) {
            this._livrosAlugados.splice(index, 1);
            livro.devolver();
        } else {
            console.log(`Você não alugou o livro "${livro.nome}".`);
        }
    }

    listarLivrosAlugados() {
        console.log(`${this.nome} alugou os seguintes livros:`);
        this._livrosAlugados.forEach(livro => {
            console.log(`- ${livro.nome}`);
        });
    }
}

class Livro {
    constructor(nome, autor, numeroPaginas) {
        this._nome = nome;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
        this._disponivel = true;
        this._alugadoPor = [];
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
        this._disponivel = false;
        this._alugadoPor.push(pessoa);
        console.log(`${pessoa.nome} alugou o livro "${this._nome}".`);
    }

    devolver() {
        this._disponivel = true;
        console.log(`O livro "${this._nome}" foi devolvido.`);
    }
}

const pessoa1 = new Pessoa("Alice", "Rua A, 123", "alice@example.com", "1234-5678");
const pessoa2 = new Pessoa("Bob", "Rua B, 456", "bob@example.com", "8765-4321");

const livro1 = new Livro("Livro A", "Autor A", 200);
const livro2 = new Livro("Livro B", "Autor B", 150);

pessoa1.alugarLivro(livro1);
pessoa2.alugarLivro(livro1);
pessoa2.alugarLivro(livro2);

pessoa1.listarLivrosAlugados();
pessoa2.listarLivrosAlugados();

pessoa1.devolverLivro(livro1);
pessoa2.devolverLivro(livro1);

pessoa1.listarLivrosAlugados();
pessoa2.listarLivrosAlugados();
