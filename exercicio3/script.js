/* Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
Por fim, imprima no console o resultado das operações. */

const entrada1 = Number(prompt("Insira um número"))
const entrada2 = Number (prompt("Insira outro número"))

function soma (num1, num2) {
    const somarNum = num1 + num2
    console.log(somarNum)
}

soma(entrada1, entrada2)

function subtracao (num1, num2) {
    const subtrairNum = num1 - num2
    console.log(subtrairNum)
}

subtracao(entrada1, entrada2)

function multiplicacao (num1, num2) {
    const multiplicarNum = num1 * num2
    console.log(multiplicarNum)
}

multiplicacao(entrada1, entrada2)

function divisao (num1, num2) {
    const dividirNum = num1 / num2
    console.log(dividirNum)
}

divisao(entrada1, entrada2)