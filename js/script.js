const telaInicial = document.querySelector(".telaInicial")
const jogo = document.querySelector(".jogo")
const conteudo = document.querySelector(".conteudo")

const acoes = document.querySelector(".acoes")
const pontos = document.querySelector(".pontos")
const pontoFinal = document.querySelector(".pontoFinal")
const resultado = document.querySelector(".resultado")
const resultadoFinal = document.querySelector(".resultadoFinal")

const btn_começar = document.querySelector(".btn_começar")
const btn_proxima = document.querySelector(".btn_proxima")
const btn_reiniciar = document.querySelector(".btn_reiniciar")

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

    {
        pergunta: "4) quanto é 1000+1000?",
        alternativas: [
            {item: "1000", correto: false },
            {item: "4000", correto: false },
            {item: "3000", correto: false },
            {item: "2000", correto: true }
        ]
    },

    {
        pergunta: "5) quanto é 10000+10000?",
        alternativas: [
            {item: "10000", correto: false },
            {item: "40000", correto: false },
            {item: "30000", correto: false },
            {item: "20000", correto: true }
        ]
    },

    {
        pergunta: "6) quanto é 100000+100000?",
        alternativas: [
            {item: "10000", correto: false },
            {item: "400000", correto: false },
            {item: "30000", correto: false },
            {item: "200000", correto: true }
        ]
    },
]

function tirarSelecao(){
    const alternativas = [...document.querySelectorAll(".alternativasSelecionada")]
    alternativas.map((el)=>{
        el.classList.remove("alternativasSelecionada")
        el.classList.remove("alternativaCorreta")
        el.classList.remove("alternativaErrada")
    })

    resultado.classList.remove("resultadoCorreto")
    resultado.classList.remove("resultadoErrado")
}

function desabilitarOpçoes(){
    const alternativas = [...document.querySelectorAll(".alternativas")]
    alternativas.map((el)=>{
        console.log(el)
        if(el.classList != "alternativasSelecionada"){
            el.setAttribute("disabled","disabled")
        }
    })
}

let indice = 0

let placar = 0

let contador = 1

function criarConteudo(){
    resultado.innerHTML = "Resultado"
    conteudo.innerHTML = ""
    
    if(questoes.length >= contador){

        const divPergunta = document.createElement("div")
        divPergunta.setAttribute("class","pergunta")
        divPergunta.innerHTML = questoes[indice].pergunta
        conteudo.appendChild(divPergunta)

        const criarAlternativas = questoes[indice]
        
        criarAlternativas.alternativas.map((el)=>{
            const divAlternativas= document.createElement("button")
            divAlternativas.setAttribute("class","alternativas")
            divAlternativas.innerHTML = el.item
            conteudo.appendChild(divAlternativas)
            
            divAlternativas.addEventListener("click",()=>{
                tirarSelecao()
                divAlternativas.classList.toggle("alternativasSelecionada")
                
                if(el.correto == true){
                    placar++
                    divAlternativas.classList.add("alternativaCorreta")
                    resultado.innerHTML = "ACERTOU!!"
                    resultado.classList.add("resultadoCorreto")
                    pontos.innerHTML = `Pontos: ${placar}`
    
                    pontoFinal.innerHTML = `Você fez: ${placar}`

                    desabilitarOpçoes()
    
                }else{
                    divAlternativas.classList.add("alternativaErrada")
                    resultado.innerHTML = "ERROU!!"
                    resultado.classList.add("resultadoErrado")
    
                    desabilitarOpçoes()
                }
            })
        })

        indice++

        contador++

    }else{
        acoes.style.display = "none"
        resultadoFinal.style.display = "flex"
    }
}

btn_começar.addEventListener("click",()=>{
    telaInicial.style.display = "none"
    jogo.style.display = "flex"
    acoes.style.display = "flex"
    criarConteudo()
})

btn_proxima.addEventListener("click",()=>{
    criarConteudo()
    tirarSelecao()
})

btn_reiniciar.addEventListener("click",()=>{
    indice = 0

    placar = 0

    contador = 1

    telaInicial.style.display = "flex"
    jogo.style.display = "none"
    resultadoFinal.style.display = "none"
})