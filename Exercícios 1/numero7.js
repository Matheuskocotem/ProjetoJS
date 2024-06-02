class Contador {
    constructor() {
        this._valor = 0; 
    }

    zerar() {
        this._valor = 0; 
    }

    incrementar() {
        this._valor += 1; 
    }

    retornarValor() {
        return this._valor; 
    }
}

const contador = new Contador();

console.log(contador.retornarValor()); 

contador.incrementar();
contador.incrementar();
console.log(contador.retornarValor()); 

contador.zerar();
console.log(contador.retornarValor()); 
