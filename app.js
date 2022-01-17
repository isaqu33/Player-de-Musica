var musica = document.querySelector("#tagAudio")
let nome = document.querySelector("#nomeEcurtir")
let tela = document.querySelector("#fotoplayer")
var play = document.querySelector("#play")
var pause = document.querySelector("#pause")
let img = document.querySelector("#img")
let barra = document.querySelector("progress")
let tempofinal = document.querySelector(".timefinal")
let duraçãomusica = document.querySelector("#tagAudio")


let i = 0;




var playlist = [
    {
        
        name: "Snowy Peak",
        capa: "./capas/foto.jpg",
        musicas: "./musics/SnowyPeaksptIChrisHaugen.mp3",

    },
    {
        
        name: "Press fruse",
        capa: "./capas/oi.jpg",
        musicas: "./musics/PressFuseFrenchFuse.mp3",

    },
    {
        
        name: "Black Mass",
        capa: "./capas/foto90.jpg",
        musicas: "./musics/BlackMassBrianBolger.mp3",

    }
];

let loude = () =>{

    
     
    
    setAtributes()
    aparecerDom()
    
    
}

musica.addEventListener("loadedmetadata", () =>{

    barra.setAttribute('max', duraçãomusica.duration )
    
    tempofinal.innerHTML = segundosPmin(Math.floor(duraçãomusica.duration))
    
     
    
    // segundosPmin(`${(duraçãomusica.duration)}`)
    
    
})


function setAtributes(numero = 0) {
    
    
    img.src = playlist[numero].capa
    nome.innerHTML = playlist[numero].name
    musica.setAttribute('src', playlist[numero].musicas)
    
    
    
    
    
}

function start() {

    musica.play()

    play.style.display = "none";
    pause.style.display = "flex";


}

function skip() {
    let local = playlist.length - 1;

    if (i == local) {

        i = 0

        // i = playlist.length-1
        setAtributes(i)
        start()
    }
    else {
        i++

        setAtributes(i)
        start()

    }

    // i = i == playlist.length-1? 0: i++

    // setAtributes(i)
    // start()

}


function prev() {

    if (i == 0) {
        i = playlist.length - 1
        setAtributes(i)
        start()
    }
    else {
        i--

        setAtributes(i)
        start()

    }

    // i = i==0? playlist.length-1: i--

    // setAtributes(i)
    // start()
}




function pouse() {
    musica.pause()
    // musica.currentTime = 0;

    play.style.display = "flex";
    pause.style.display = "none";
}

function callListaMusicas() {
    
    // document.querySelector("#listadeMusicas").style.display = "flex"
    document.querySelector("#listadeMusicas").style.transform = "translateY(0%)"

}



// lista de musicas------------------------------



function callReprodutor() {

    document.querySelector("#listadeMusicas").style.transform = "translateY(100%)"
}


function aparecerDom() {




    let resultado = playlist.map((item, index) =>

        `<div class="cardMusica" id="${index}">
            ${item.name}
        </div>`


    )


    document.querySelector("#containermusicas").innerHTML = resultado.join("")

}

document.querySelector("#containermusicas").addEventListener("click", (event) => {

    if (event.target.classList == "cardMusica"){
        setAtributes(event.target.id)
        i = event.target.id
        start()
    }
})


musica.addEventListener("ended", skip)



// funções de atualização de tela do tempo de musica ----------------------------------------------

musica.addEventListener("timeupdate", () => {

    

    barra.value = musica.currentTime
    document.querySelector("#timeinicio").innerHTML = segundosPmin(Math.floor(musica.currentTime)) 
    
    
})


function segundosPmin(tempo){

    let campoMinutos = Math.floor(tempo/ 60);
    let campoSegundos = tempo % 60;

    if(campoSegundos < 10){
        campoSegundos = "0" + campoSegundos 
    }
    return campoMinutos+ ":" +campoSegundos;
}
 
loude()







