window.alert(`Olá!!!  Seja bem vindo.`) //escreve o conteudo salvo na variável nome.
window.alert("Qual operação deseja fazer? ")
var operação = window.prompt()
window.confirm(`Sua escolha foi: ${operação}`) //escreve o conteudo salvo na variável nome. 
//declarando as funções que a calculadora irá fazer. 
function somar(valor1, valor2){
  return valor1 + valor2; //No retorno da função é bom por o que ela faz. 
}
function multiplicar(valor1, valor2){
  return valor1 * valor2;
}
function subtrair(valor1, valor2){
  return valor1 - valor2;
}
function divisão(valor1, valor2){
  return valor1 / valor2;
}

var x = window.prompt('Digite o primeiro número: ') //mostra tela pedindo número
var y = window.prompt('Digite o segundo número: ') //mostra tela pedindo número5

/*
if(operação => somar){
return somar(x, y);
}           
if (operação => subtrair) {
return subtrair(x, y);
}            
if(operação => multiplicar){
return multiplicar(x, y);
}           
if (operação => divisão) {
return divisão(x, y);
}
*/
console.log(somar(x, y));
console.log(multiplicar(x, y));
console.log(subtrair(x, y));
console.log(divisão(x, y));
