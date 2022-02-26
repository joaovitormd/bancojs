import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static qtdContas=0;
   // agencia;
   // _cliente; estao sendo inicializados dentro do construtor
    //#saldo=0;
   // _saldo = 0; //atributo privado

   constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.qtdContas++;
        
   }
   //Sobrescrevendo o comportamento de sacar da classe mãe Conta
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa)
        
    }

    

    
    
}