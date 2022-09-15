/* a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. 
Invoque a função e imprima no console o resultado. */

const numero1 = Number(prompt("Insira um número"))
const numero2 = Number (prompt("Insira outro número"))

function somaEntradas (num1, num2){
    const soma = num1 + num2 
    console.log(soma)
}

somaEntradas(numero1, numero2)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function verificarBoolean (num1, num2){
    console.log(Boolean(num1 >= num2))
}

verificarBoolean(numero1, numero2)

//c) Uma função que receba um número e imprima se ele é par ou não

function parOuNao (num){
    if (num % 2 === 0){
    return "O número é par"
    } else {
        return "O número é ímpar"
    }
}

console.log(parOuNao(Number(prompt("Digite o número que você quer saber se é par ou ímpar"))))

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagem (frase){
    console.log(`Quantidade de caracteres da mensagem:" ${frase.length}`)
    console.log(frase.toUpperCase())
}

mensagem(prompt("Digite sua mensagem:"))