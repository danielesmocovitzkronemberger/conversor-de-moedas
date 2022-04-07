// variavel - let é uma palavra reservada do JS 
// quanto for usar texto na váriavel, usar "", e para números sem ""

//let dolar = 1235
//let dorlar = "um texto"

//console.log(dolar)


// document - para quando for me referir ao html, e pegar valor pelo id usando getEmentById
// value - ele vai mostrar só o valor do input

//Evento - ex: se eu clico no botão - addEventListener - e ele tem vários eventos

//usei os valores dolar e euro no começo da aula, antes de criar a var moedas c/ link 
//let dolar = 5.0
//let euro = 6.0

let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



//Função - function - é bem parecido com a varivel, é um trecho de código que só vai ser executado quando eu pedir

// Essa função é responsavel por converter real/dolar e real/euro
// async - eu to avisando que minha função é asincrona, que vai sincronizar com o site
// fetch - uma função que vai no site e pegar o valor, só que demora alguns segundos pro servidor retornar, então preciso usar o await
// await - eu preciso falar pro meu código esperar que isso aconteça e preciso colocar o async
//then - 
//json - 

async function converter() {
    
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(retornovalorsite){
        return retornovalorsite.json()
        })
    
        let dolar = moedas.USD.high
        let euro = moedas.EUR.high

    console.log(dolar)
    console.log(euro)
    
    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")


    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


}

// Essa função e responsavel por trocar a bandeira e o nome das moedas
// innerHTML - ele coloca novos valores no HTML

    function trocaDeMoedas() {
        let textoMoedas = document.getElementById("texto-moedas")
        let bandeiraMoedas = document.getElementById("bandeira-moedas")


        if (select.value === "US$ Dólar Americano") {
            textoMoedas.innerHTML = ("Dólar Americano")
            bandeiraMoedas.src = "./img/estados-unidos.png"
        }

        if (select.value === "€ Euro") {
            textoMoedas.innerHTML = ("Euro")
            bandeiraMoedas.src = "./img/euro.png"
        }

        converter()
    
    }


// vizinho chato - ouvinte de evento addEventlistener, ele avisa quando chamar a função
    
botao.addEventListener("click", converter)
    select.addEventListener("change", trocaDeMoedas)


//console.log(valorEmDolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) )
// .innerHTML - coloca novos valores no html


