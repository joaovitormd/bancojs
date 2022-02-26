//Classe Abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta)
            throw new Error("Não instancie um objeto tipo Conta, pois é uma classe Abstrata");

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }


    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
            this._cliente = novoCliente;

    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Metodo Abstrato, vazio por padrão
    sacar(valor){
        throw new Error("O metodo sacar da Conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo > valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor < 0) 
            return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}