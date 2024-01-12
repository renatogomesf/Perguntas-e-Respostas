const telaInicial = document.querySelector(".telaInicial")
const jogo = document.querySelector(".jogo")
const conteudo = document.querySelector(".conteudo")

const pontos = document.querySelector(".pontos")
const resultado = document.querySelector(".resultado")

const btn_começar = document.querySelector(".btn_começar")
const btn_proxima = document.querySelector(".btn_proxima")
const btn_verificar = document.querySelector(".btn_verificar")

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

function criarConteudo(){
    resultado.innerHTML = "Resultado"
    conteudo.innerHTML = ""
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
}

btn_começar.addEventListener("click",()=>{
    telaInicial.style.display = "none"
    jogo.style.display = "flex"
    criarConteudo()
})

btn_proxima.addEventListener("click",()=>{
    criarConteudo()
    tirarSelecao()
})