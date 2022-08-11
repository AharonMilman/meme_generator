'use strict'
const IMG_PATH = 'img_meme_square/'

function renderMeme(chosenMemeIdx = 0){
    const meme = getMeme(chosenMemeIdx)
    const id = meme.id
    const img = new Image()
    const selectedImg = gImgs.find(item => item.id === id)
    console.log(selectedImg);
    img.src = IMG_PATH + selectedImg.fileName
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
        drawText(meme.lines[0].txt)
    }  
}

function drawText(txt, x = 100, y = 100) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 1;
    gCtx.font = '40px david';
    gCtx.fillStyle = 'yellow';
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'green';
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

