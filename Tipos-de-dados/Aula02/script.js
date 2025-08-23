// 7 tipos de Dados
//Todos são primitivos exceto os objetos.
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
// Primitivos são dados imutáveis.

// Verificar tipo de Dado
var nome = 'Ryan';
console.log(typeof nome);
// retorna string
//typeof null retorna object

// String || Você pode somar uma string e assim concatenar as palavras.

var nome = 'Ryan';
var sobrenome = 'Pacheco';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// Sring ||  Você pode somar números com strings, o resultado final é sempre uma string.

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

// Aspas Duplas, Simples e Template String
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
 "JavaScript é "super" fácil"; // Inválido 
// Não necessariamente precisamos atribuir valores a uma variável

// Template String
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; 
// Utilizando Template String
// Você deve passar expressões / variáveis dentro de ${}