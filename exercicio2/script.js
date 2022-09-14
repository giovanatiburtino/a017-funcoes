/* a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. 
Invoque a função e imprima no console o resultado. */

function somaEntradas (num1, num2){
    const soma = num1 + num2 
    console.log(soma)
}

somaEntradas(Number(prompt("Insira um número")), Number (prompt("Insira outro número")))