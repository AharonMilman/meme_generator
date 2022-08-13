'use strict'

function showElement(el){
    const element = document.querySelector(el)
        if(element.style.display === 'none'){
        element.style.display = 'block'
    }
}

function hideElement(el){
    const element = document.querySelector(el)
    if(element.style.display === 'block' || element.style.display === '' ){
        element.style.display = 'none'
    }
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    if(elContainer.offsetWidth < elContainer.offsetHeight ) {
        gElCanvas.width = gElCanvas.height = elContainer.offsetWidth
    }
    else{
        gElCanvas.height = gElCanvas.width = elContainer.offsetHeight
    }
    // gElCanvas.width = elContainer.offsetWidth
    // gElCanvas.height = elContainer.offsetHeight
    renderMeme()
}

