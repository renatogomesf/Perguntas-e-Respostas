const telaInicial = document.querySelector(".telaInicial")
const jogo = document.querySelector(".jogo")
const conteudo = document.querySelector(".conteudo")

const btn_começar = document.querySelector(".btn_começar")
const btn_proxima = document.querySelector(".btn_proxima")
const btn_verificar = document.querySelector(".btn_verificar")

//objeto que contem todas as perguntas do jogo
const questoes = {
    id1: {
        Q1: "1) Quanto é 2 + 2?",
        respostas: {
            correta: "2",
            b: "1",
            c: "4",
            d: "3"
        }
    },

    id2: {
        Q2: "2) Quanto é 1 + 1 + 1 + 1 + 1?",
        respostas: {
            a: "1111",
            b: "111",
            c: "11",
            d: "1"
        }
    },
    id3: {
        Q3: "3) Quanto é 9 x 9?",
        respostas: {
            a: "2222",
            b: "222",
            c: "22",
            d: "2"
        }
    },
    id4: {
        Q4: "4) Quanto é 100 - 89?",
        respostas: {
            a: "0000",
            b: "000",
            c: "00",
            d: "0"
        }
    },
    id5: {
        Q5: "5) Quanto é 1000 / 9?",
        respostas: {
            a: "7777",
            b: "777",
            c: "77",
            d: "7"
        }
    },
}

//função geradora para chamar as perguntas do objeto uma por uma.
function* chamarPergunta(){
    yield (questoes.id1.Q1)
    yield (questoes.id2.Q2)
    yield (questoes.id3.Q3)
    yield (questoes.id4.Q4)
    yield (questoes.id5.Q5)
}

//função geradora para chamar as respostas do objeto uma por uma.
function* chamarResposta(){
    yield (questoes.id1.respostas)
    yield (questoes.id2.respostas)
    yield (questoes.id3.respostas)
    yield (questoes.id4.respostas)
    yield (questoes.id5.respostas)
}

//faz a chamada das funções geradoras que retornam primeiramente iteradores.
const perguntas = chamarPergunta()
const resposta = chamarResposta()

//muda de tela exibindo a primeira pergunta.
btn_começar.addEventListener("click",()=>{
    telaInicial.style.display = "none"
    jogo.style.display = "block"
    criarConteudo()
})

//remove o estilo de seleção de uma alternativa caso clique em outra
function tirarSelecao(){
    const alternativas = [...document.querySelectorAll(".alternativasSelecionada")]
    alternativas.map((el)=>{
        el.classList.remove("alternativasSelecionada")
    })
}

//função que cria perguntas e respostas
function criarConteudo(){

    //limpa array
    let array_resposta = []

    //limpa div do conteudo
    conteudo.innerHTML = ""

    //cria a div de pergunta
    const divPergunta = document.createElement("div")
    divPergunta.setAttribute("class","pergunta")
    divPergunta.innerHTML = perguntas.next().value
    conteudo.appendChild(divPergunta)
    
    //adiciona o retorno da função chamarResposta() no array
    array_resposta.push(resposta.next().value)
    
    //percorre o array criando as alternativas
    array_resposta.map((el)=>{
        for(i in el){
            const divAlternativas = document.createElement("div")
            divAlternativas.setAttribute("class","alternativas")
            divAlternativas.innerHTML = el[i]

            divAlternativas.addEventListener("click",()=>{
                tirarSelecao()
                divAlternativas.classList.toggle("alternativasSelecionada")
            })

            conteudo.appendChild(divAlternativas)

        }
    })
}

//muda as perguntas do jogo
btn_proxima.addEventListener("click",()=>{
    criarConteudo()
})

btn_verificar.addEventListener("click",()=>{
    console.log(resposta.next())
})