class Objeto {
    constructor(largura, altura) {
        this._largura = largura;
        this._altura = altura;
    }

    get largura() {
        return this._largura;
    }

    get altura() {
        return this._altura;
    }

    set largura(largura) {
        this._largura = largura;
    }

    set altura(altura) {
        this._altura = altura;
    }

    calculaArea() {
        return this._largura * this._altura;
    }
}

class Triangulo extends Objeto {
    constructor(largura, altura, tipo) {
        super(largura, altura);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    calculaArea() {
        return (this._largura * this._altura) / 2;
    }
}

class Retangulo extends Objeto {
    constructor(largura, altura) {
        super(largura, altura);
    }

    verificaSeEhQuadrado() {
        return this._largura === this._altura;
    }

    calculaArea() {
        return this._largura * this._altura;
    }
}

const triangulo = new Triangulo(10, 20, "Equilátero");
console.log(`Triângulo: Tipo: ${triangulo.tipo}, Área: ${triangulo.calculaArea()}`);


const retangulo = new Retangulo(15, 25);
console.log(`Retângulo: Área: ${retangulo.calculaArea()}`);
console.log(`O retângulo é um quadrado? ${retangulo.verificaSeEhQuadrado() ? "Sim" : "Não"}`);


const quadrado = new Retangulo(20, 20);
console.log(`Quadrado: Área: ${quadrado.calculaArea()}`);
console.log(`O quadrado é um quadrado? ${quadrado.verificaSeEhQuadrado() ? "Sim" : "Não"}`);
