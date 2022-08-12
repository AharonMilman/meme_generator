'use strict'
const IMG_PATH = 'img_meme_square/'

function renderMeme(chosenMemeIdx = 0){
    const meme = getMeme(chosenMemeIdx)
    const id = meme.selectedImgId

    const img = new Image()
    const selectedImg = gImgs.find(item => item.id === id)
    img.src = IMG_PATH + selectedImg.fileName
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
        const oldLineIdx = gMeme.selectedLineIdx // in order to have the focus on the same line
        for(let i=0; i< meme.lines.length; i++) {
            gMeme.selectedLineIdx = i
            drawText()
        }
        gMeme.selectedLineIdx = oldLineIdx
    }  
}

function drawText(txt = 'hi', x = 100, y = 100) {
    const fontSize = gMeme.lines[gMeme.selectedLineIdx].size
    const fontType = gMeme.lines[gMeme.selectedLineIdx].font
    txt = gMeme.lines[gMeme.selectedLineIdx].txt
    gCtx.beginPath()
    x = gMeme.lines[gMeme.selectedLineIdx].xPos
    y = gMeme.lines[gMeme.selectedLineIdx].yPos
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align
    gCtx.lineWidth = 0.7
    gCtx.font = `${fontSize}px ${fontType}`
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].fillColor
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].strokeColor
    gCtx.strokeText(txt, x, y)
    gCtx.closePath()
}

function onChangeStrokeColor(color) {
    changeStrokeColor(color)
    renderMeme()
}

function onChangeFillColor(color) {
    changeFillColor(color)
    renderMeme()
}

function onAlignChange(direction) {
    alignChange(direction)
    renderMeme()
}

function onChangeTextSize(amount){
    changeTextSize(amount)
    renderMeme()
}

function onMoveLine(amount){
    moveLine(amount)
    renderMeme()
}

function onRemoveLine(){
    removeLine()
    renderMeme()
}

function onAddLine(){
    addLine()
    renderMeme()
}

function onSwitchLineFocus(){
    switchLineFocus()
    renderMeme()
}
