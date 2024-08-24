/*

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);

console.log(typeof segundoNumero);



console.log(typeof primeiroNumero + segundoNumero);
*/


// exemplo de alturaEmM

const nome = 'Aline';
const sobrenome = 'Ferreira';
const idade = 25;
const peso = 78;
const alturaEmM = 1.69; 
let imc = peso / (alturaEmM * alturaEmM )
const anoDeNascimento = 1999

console.log('Eu me chamo', nome, sobrenome, 'tenho', idade, 'anos e peso', peso, 'Kg e a minha altura é', alturaEmM, 'e estou aprendendo a codar')
console.log('meu IMC é de',imc )
console.log(nome, sobrenome, 'nascida em', anoDeNascimento, 'está estudando programação para fazer a certificação de AWS' )

//não consigo usar craze pq meu teclado é 60% tive que copiar e colcar o exemplo abaixo

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}.`);