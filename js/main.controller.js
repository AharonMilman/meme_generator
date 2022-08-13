'use strict'

let gFltrImgs = []
let gElCanvas
let gCtx

function onInitGame() {
    setSite()
    loadSavedMemes()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderImgs()
    renderDataList()

    addListeners()
}

function setSite() {
    hideElement('.saved-memes-container')
    hideElement('.editor-container')
    onToggleActive('.about-modal-container')
}

function onCancelRefresh(event) {
    event.preventDefault()
}

function onSetMemeText(txt) {
    setLineTxt(txt)
}

function onToggleActive(el) {
    var x = document.querySelector(el)
    x.classList.toggle("hide")
}

function onToggleAboutModal() {
    onToggleActive('.about-modal-container')
    onToggleActive('.hidden-screen')
}

function onShowMemes() {
    console.log('memes');
    showElement('.saved-memes-container')
    hideElement('.gallery-container')
    hideElement('.editor-container')

}

function onShowGallery() {
    console.log('galary');
    showElement('.gallery-container')
    hideElement('.saved-memes-container')
    hideElement('.editor-container')
}

function onShowEditorNewPic(id) {
    showElement('.editor-container')
    hideElement('.gallery-container')
    hideElement('.saved-memes-container')
    setImg(id)
}

function showEditor() {
    showElement('.editor-container')
    hideElement('.gallery-container')
    hideElement('.saved-memes-container')
}

function onShowEditorSavedMeme(memeId) {
    showElement('.editor-container')
    hideElement('.gallery-container')
    hideElement('.saved-memes-container')
    gMeme = getMeme(memeId)
    renderMeme()
}

function renderImgs() {
    let strHTMLs = []
    let renderImgs = []
    gFltrImgs.length ?  renderImgs = gFltrImgs : renderImgs = gImgs
    strHTMLs = renderImgs.map(img =>
        `
        <img src="img_meme_square/${img.fileName}" alt="" onclick="onShowEditorNewPic(${img.id})">
        `
    )
    const strHTML = strHTMLs.join('')
    const elGrid = document.querySelector('.grid-container')
    elGrid.innerHTML = strHTML
}

function onAddRandomMeme() {
    addRandomMeme()
    showEditor()
    renderMeme()
}

function onSetSearchParam(txtSearch) {
    setSearchParam(txtSearch)
    renderImgs()
}

function renderDataList(){
    buildDataList()
    
    let strHTMLs = []
    strHTMLs = gDataList.map(listItem =>
        `
        <option value="${listItem}">
        `
    )
    console.log(strHTMLs);
    const strHTML = strHTMLs.join('')
    const elDataList = document.querySelector('#search-bar-list')
    elDataList.innerHTML = strHTML
}