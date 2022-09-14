//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function imprimeNome (nome){
    console.log(`Olá, ${nome}!`)
}

imprimeNome(prompt("Digite seu nome:"))

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.
function tabuadaDo6 (tabuada){
    const numero = 6
    for(let i in tabuada){
        console.log(`${numero} x ${tabuada[i]} = ${numero*tabuada[i]}`)
    }
}

const multiplicadoPor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tabuadaDo6(multiplicadoPor)

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
const digiteNome = (nome) => {
    console.log(`Olá, ${nome}`)
}

digiteNome(prompt("Qual é o seu nome?:"))

//tabuada do 6 com arrow function
const tabuadaSeis = (tabuada) => {
    const numero = 6 
    for(let i in tabuada){
        console.log(`${numero} X ${tabuada[i]} = ${numero*tabuada[i]}`)
    }
}

tabuadaSeis(multiplicadoPor)