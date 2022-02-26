import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupança.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Joao", 10000, 12345678900)
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Natalia", 5000, 12345678901)
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 11122233300, "456")
const gerenteLogado = SistemaAutenticacao.login(gerente, "123")
const diretorLogado = SistemaAutenticacao.login(diretor, "123456")
const clienteLogado = SistemaAutenticacao.login(cliente, "456")


console.log(gerenteLogado, diretorLogado, clienteLogado);


