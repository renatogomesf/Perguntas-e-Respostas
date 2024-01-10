const telaInicial = document.querySelector(".telaInicial")
const jogo = document.querySelector(".jogo")

const btn_começar = document.querySelector(".btn_começar")
const btn_proxima = document.querySelector(".btn_proxima")

btn_começar.addEventListener("click",()=>{
    telaInicial.style.display = "none"
    jogo.style.display = "block"


})

const questoes = {
    id1: {
        Q1: "Quanto é 1 + 1?",
        respostas: {
            a: "2",
            b: "1",
            c: "4",
            d: "3"
        }
    },

    id2: {
        Q2: "Quanto é 1 + 1?",
        respostas: {
            a: "2",
            b: "22222",
            c: "4",
            d: "3"
        }
    },
}

// let contador = "id"+ 1

// btn_proxima.addEventListener("click",()=>{
//     console.log(questoes.id1)
//     console.log(contador)
//     contador++
// })

for(el in questoes){
    console.log(questoes[el])
}