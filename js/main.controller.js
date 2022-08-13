'use strict' 

var gElCanvas
var gCtx

function onInitGame(){
    setSite()
    loadSavedMemes()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderImgs()

    addListeners()
}

function setSite(){
    hideElement('.saved-memes-container')
    hideElement('.editor-container')
    onToggleActive('.about-modal-container')
}

function onCancelRefresh(event){
    event.preventDefault()
}

function onSetMemeText(txt){
    setLineTxt(txt)
}

function onToggleActive(el) {
    var x = document.querySelector(el) 
    x.classList.toggle("hide")
}

function onShowMemes(){
    console.log('memes');
    showElement('.saved-memes-container')
    hideElement('.gallery-container')
    hideElement('.editor-container')

}

function onShowGallery(){
    console.log('galary');
    showElement('.gallery-container')
    hideElement('.saved-memes-container')
    hideElement('.editor-container')
}

function onShowEditorNewPic(id){
    showElement('.editor-container')
    hideElement('.gallery-container')
    hideElement('.saved-memes-container')
    setImg(id)
}

function showEditor(){
    showElement('.editor-container')
    hideElement('.gallery-container')
    hideElement('.saved-memes-container')
}

function onShowEditorSavedMeme(memeId){
    showElement('.editor-container')
    hideElement('.gallery-container')
    hideElement('.saved-memes-container')
    gMeme = getMeme(memeId)
    renderMeme()
}

function renderImgs(){
    let strHTMLs= []
    strHTMLs = gImgs.map(img => 
        `
        <img src="img_meme_square/${img.fileName}" alt="" onclick="onShowEditorNewPic(${img.id})">
        `
    )
    const strHTML = strHTMLs.join('')    
    const elGrid = document.querySelector('.grid-container')
    elGrid.innerHTML = strHTML
} 

function onAddRandomMeme(){
    addRandomMeme()
    showEditor()
    renderMeme()
}

