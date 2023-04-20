
var altura = 0
var largura = 0
var vidas = 1 
var tempo = 30

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
    criaMosquitoTempo = 750
} 

function ajusteTelaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajusteTelaJogo()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
},1000)


function posicaoAleatoria() {
    
    //removendo o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'game_over.html'
        } else {
        document.getElementById('v' + vidas).src= "./img/coracao_vazio.png"

        vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura) -90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criando o elemento HTML
    var mosca = document.createElement('img')
    mosca.src = './img/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosquito'
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca)
    
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito'

        case 1:
            return 'mosquito1'

        case 2:
            return 'mosquito2'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}


