class Complexo {
    constructor(real, imaginario) {
        this._real = real;
        this._imaginario = imaginario;
    }

    get real() {
        return this._real;
    }

    get imaginario() {
        return this._imaginario;
    }

    set real(real) {
        this._real = real;
    }

    set imaginario(imaginario) {
        this._imaginario = imaginario;
    }

    Modulo() {
                //essa parte pedi ajuda para o chat
        return Math.sqrt(this._real ** 2 + this._imaginario ** 2);
    }

    Angulo() {
        return Math.atan2(this._imaginario, this._real) * (180 / Math.PI);
    }
}

class Real extends Complexo {
    constructor(valor) {
        super(valor, 0); 
    }

    Sinal() {
        return this._real >= 0 ? 1 : -1;
    }
}

const complexo = new Complexo(3, 4);
console.log(`Número Complexo: ${complexo.real} + ${complexo.imaginario}i`);
console.log(`Módulo: ${complexo.Modulo()}`);
console.log(`Ângulo: ${complexo.Angulo()} graus`);

const realPositivo = new Real(5);
console.log(`Número Real: ${realPositivo.real}`);
console.log(`Módulo: ${realPositivo.Modulo()}`);
console.log(`Ângulo: ${realPositivo.Angulo()} graus`);
console.log(`Sinal: ${realPositivo.Sinal()}`);

const realNegativo = new Real(-3);
console.log(`Número Real: ${realNegativo.real}`);
console.log(`Módulo: ${realNegativo.Modulo()}`);
console.log(`Ângulo: ${realNegativo.Angulo()} graus`);
console.log(`Sinal: ${realNegativo.Sinal()}`);
