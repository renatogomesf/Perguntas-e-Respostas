const telaInicial = document.querySelector(".telaInicial")
const jogo = document.querySelector(".jogo")
const conteudo = document.querySelector(".conteudo")

const btn_começar = document.querySelector(".btn_começar")
const btn_proxima = document.querySelector(".btn_proxima")
const btn_verificar = document.querySelector(".btn_verificar")

btn_começar.addEventListener("click",()=>{
    telaInicial.style.display = "none"
    jogo.style.display = "block"
    criarConteudo()
})

const questoes = [
    {
        pergunta: "1) quanto é 1+1?",
        alternativas: [
            {item: "1", correto: false },
            {item: "2", correto: true },
            {item: "3", correto: false },
            {item: "4", correto: false }
        ]
    },

    {
        pergunta: "2) quanto é 10+10?",
        alternativas: [
            {item: "10", correto: false },
            {item: "30", correto: false },
            {item: "20", correto: true },
            {item: "40", correto: false }
        ]
    },

    {
        pergunta: "3) quanto é 100+100?",
        alternativas: [
            {item: "100", correto: false },
            {item: "400", correto: false },
            {item: "300", correto: false },
            {item: "200", correto: true }
        ]
    },
]

let contador = 0

function criarConteudo(){
    const divPergunta = document.createElement("div")
    divPergunta.setAttribute("class","pergunta")
    divPergunta.innerHTML = questoes[contador].pergunta
    conteudo.appendChild(divPergunta)

    questoes.map((el)=>{
        const divAlternativas= document.createElement("div")
        divAlternativas.setAttribute("class","alternativas")
        divAlternativas.innerHTML = el.alternativas[contador].item
        conteudo.appendChild(divAlternativas)

        console.log(el.alternativas[contador])
    })
    
    contador++
    console.log(contador)
}

btn_proxima.addEventListener("click",()=>{
    conteudo.innerHTML = ""
    criarConteudo()
})