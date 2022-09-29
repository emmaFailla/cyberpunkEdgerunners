//Pantalla de Carga

let pantallaDeCarga = document.querySelector('.pantallaDeCarga')

 let pantallaDeCargaOff = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(pantallaDeCarga)
        },5000)
    })

    .then(val => val.classList.add('pantallaOff'))
 }


//welcomeAnimation
function welcome(){ 
let textContainer = document.querySelector('.welcome')    
let welcome = ["B","i","e","n","v","e","n","i","d","o","s"," ","a"," ","N","i","g","h","t"," ","C","i","t","y"]
let contador = 0
textContainer.innerHTML = ""
textContainer.classList.add('welcomeText')
textContainer.classList.remove('welcomeTextBlurr')
let typing = new Audio("sounds/typing.mp3")
typing.play()

setInterval(()=>{

    if(contador == welcome.length){
        
        return "Fin de la funcion"
    }
    else if(textContainer.innerHTML == "B"){
        
    }
    textContainer.innerHTML+= welcome[contador]
    contador++


},50)
//Se tarda un tiempo de 
}


//ShowMain
let showMain = () =>{
    let mainContent = document.querySelector('.mainStuff')

    let playStationAuido = new Audio('sounds/mainShows.mp3')
    playStationAuido.play()
    mainContent.classList.add('showMainStuff')
    pantallaDeCarga.style.display ="none"
    
}

let index = 0

let mainSlider = (i)=>{
    return new Promise((resolve,reject)=>{
      let mainSons = document.querySelectorAll('.mainStuff__son')
      resolve(mainSons)  
    })
    .then(screens =>{
        for(let screen of screens){
            screen.style.display ="none"
        }
        screens[i].style.display =" flex"
    })
}
mainSlider(index)
const rightButton = document.querySelector('.rightButton')
const leftButton = document.querySelector('.leftButton')

rightButton.addEventListener('click',()=>{
    if(index == 3){
      return mainSlider(index = 0)  
    } 
    return mainSlider(index+=1)
   
})
leftButton.addEventListener('click',()=>{
    if(index == 0 ) return mainSlider(index = 3)
   return mainSlider(index-=1)
  
})
document.addEventListener('keydown',(e)=>{
    if(e.key == 'ArrowRight'){
        if(index == 3){
            return mainSlider(index = 0)  
          } 
          return mainSlider(index+=1)
    }
    else if(e.key == 'ArrowLeft'){
        if(index == 0 ) return mainSlider(index = 3)
        mainSlider(index-=1)
    }
})

let footerInfoTitle = document.querySelector('.footerInfo__title')
let footerInfo = document.querySelector('.footerInfo__info')

let groupContainer = document.querySelector('.footerExtraImg__container')
let abierto = false;

groupContainer.addEventListener('click',()=>{
    let topOpening = document.querySelector('.topOpening')
    let botOpening = document.querySelector('.botOpening')

    if(abierto == false){
    topOpening.classList.toggle('openingAnimation')
    topOpening.classList.toggle('closingAnimation')
    botOpening.classList.toggle('openingAnimation')
    botOpening.classList.toggle('closingAnimation')
    return abierto = true
    }

    else if (abierto == true)
    botOpening.classList.toggle('openingAnimation')
    botOpening.classList.toggle('closingAnimation')
    topOpening.classList.toggle('openingAnimation')
    topOpening.classList.toggle('closingAnimation')
    return abierto == false


})









async function inicio(){
    let chargeScreenOff = await pantallaDeCargaOff
    chargeScreenOff()
    let displayWelcome = await welcome
    setTimeout(()=>{
        displayWelcome()
    },6000)
    let showingMain = await showMain

    setTimeout(()=>{
        showingMain()
    },8000)
    

}

inicio()


      