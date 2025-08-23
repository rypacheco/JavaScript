var nome = 'Ryan';
let idade = 24;
const temFaculdade = true;

console.log(nome);
console.log(idade);
console.log(temFaculdade);
console.log(nome, idade, temFaculdade,nome);

var preco = 25
var totalComprado = 5
var totalPreco = totalComprado * preco;
console.log(totalPreco);

var sobrenome = 'Pacheco', 
    cidade = 'Xanxere';
console.log(sobrenome,cidade)

var semValor;
console.log(semValor)

// Inválido
/*
var §nome;
var function;
var 1possuiFaculdade;
*/

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

// Erro ao tentar utilizar uma variável que não foi declarada.
// console.log(nome);
// retorna nome is not defined

// Hoisting
// São movidas para cima do código, porém o valor atribuído não é movido.
console.log(nome);
var nome = 'Ryan';
// Retorna undefined

var profissao = 'Programador';
console.log(profissao);
// Retornar Designer

var jogo = 'Resident Evil';
jogo = 'Elden Ring';
console.log(jogo);