class Produto {
    constructor(nome, preco, quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    atualizarEstoque(quantidade) {
        this.quantidadeEstoque -= quantidade;
    }

    informaNome() {
        return this.nome;
    }

    informaPreco() {
        return this.preco;
    }

    informaQuantidadeEstoque() {
        return this.quantidadeEstoque;
    }
}

class ItemPedido {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    calcularTotal() {
        return this.produto.informaPreco() * this.quantidade;
    }

    informaProduto() {
        return this.produto.informaNome();
    }

    informaQuantidade() {
        return this.quantidade;
    }
}

class Pedido {
    constructor() {
        this.itens = [];
        this.tipoPagamento = null;
    }

    adicionarItem(itemPedido) {
        if (itemPedido.quantidade <= itemPedido.produto.informaQuantidadeEstoque()) {
            this.itens.push(itemPedido);
            itemPedido.produto.atualizarEstoque(itemPedido.quantidade);
        } else {
            console.log(`Quantidade solicitada para ${itemPedido.informaProduto()} excede o estoque disponível.`);
        }
    }

    calcularTotalPedido() {
        return this.itens.reduce((total, item) => total + item.calcularTotal(), 0);
    }

    definirTipoPagamento(tipo) {
        if (["dinheiro", "cheque", "cartão"].includes(tipo)) {
            this.tipoPagamento = tipo;
        } else {
            console.log("Tipo de pagamento inválido.");
        }
    }

    informaTipoPagamento() {
        return this.tipoPagamento;
    }

    listarItens() {
        this.itens.forEach(item => {
            console.log(`Produto: ${item.informaProduto()}, Quantidade: ${item.informaQuantidade()}, Total: R$${item.calcularTotal().toFixed(2)}`);
        });
    }

    fecharPedido() {
        console.log("Pedido fechado.");
        console.log("Itens do pedido:");
        this.listarItens();
        console.log(`Total do pedido: R$${this.calcularTotalPedido().toFixed(2)}`);
        console.log(`Tipo de pagamento: ${this.informaTipoPagamento()}`);
    }
}

const produto1 = new Produto("Arroz", 20.00, 100);
const produto2 = new Produto("Feijão", 10.00, 50);
const produto3 = new Produto("Macarrão", 5.00, 200);

const item1 = new ItemPedido(produto1, 2);
const item2 = new ItemPedido(produto2, 5);
const item3 = new ItemPedido(produto3, 10);

const pedido = new Pedido();
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);
pedido.adicionarItem(item3);

pedido.definirTipoPagamento("cartão");

pedido.fecharPedido();
