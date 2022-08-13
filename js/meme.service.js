'use strict'

const SAVE_KEY = 'memeDb'
const gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
const gFunnyWords = ['I', 'you', 'love', 'me', 'cat', 'dog', 'one', 'what', 'are', 'true', 'everybody', 'expectation', 'reality', 'big', 'small', 'water', 'world']

const gImgs = [
    { id: 1, fileName: '1.jpg', keywords: ['trump', 'politics'] },
    { id: 2, fileName: '2.jpg', keywords: ['puppy', 'cute'] },
    { id: 3, fileName: '3.jpg', keywords: ['baby', 'cute', 'puppy'] },
    { id: 4, fileName: '4.jpg', keywords: ['cat', 'sleep'] },
    { id: 5, fileName: '5.jpg', keywords: ['baby', 'success'] },
    { id: 6, fileName: '6.jpg', keywords: ['history', 'man'] },
    { id: 7, fileName: '7.jpg', keywords: ['baby', 'cute'] },
    { id: 8, fileName: '8.jpg', keywords: ['thinking'] },
    { id: 9, fileName: '9.jpg', keywords: ['baby', 'evil'] },
    { id: 10, fileName: '10.jpg', keywords: ['politics', 'obama'] },
    { id: 11, fileName: '11.jpg', keywords: ['man', 'hug'] },
    { id: 12, fileName: '12.jpg', keywords: ['blame', 'man'] },
    { id: 13, fileName: '13.jpg', keywords: ['success', 'man', 'actor'] },
    { id: 14, fileName: '14.jpg', keywords: ['matrix', 'man', 'actor'] },
    { id: 15, fileName: '15.jpg', keywords: ['actor', 'man', 'got'] },
    { id: 16, fileName: '16.jpg', keywords: ['happy', 'man', 'startrek'] },
    { id: 17, fileName: '17.jpg', keywords: ['putin', 'politics'] },
    { id: 18, fileName: '18.jpg', keywords: ['toystory'] },
]

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    isSaved: false,
    imgSrc: '',
    memeId: 0,
    lines: [
        {
            txt: 'UPPER LINE',
            font: 'impact',
            size: 60,
            align: 'center',
            fillColor: 'black',
            strokeColor: 'white',
            xPos: 250,
            yPos: 400
        },
        {
            txt: 'BOTTOM LINE',
            font: 'impact',
            size: 60,
            align: 'center',
            fillColor: 'black',
            strokeColor: 'white',
            xPos: 250,
            yPos: 100
        }
    ]
}


let gMemes = []


let gSelectedMemeIdx = 0

function getMeme(id) {
    console.log('im here');
    return gMemes.find(meme => meme.memeId === id)
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    console.log(txt)
    renderMeme()
}

function setImg(id) {
    createNewMeme()
    gMeme.selectedImgId = id
    renderMeme()
}

function changeStrokeColor(color) {
    const meme = gMeme
    meme.lines[meme.selectedLineIdx].strokeColor = color
}

function changeFillColor(color) {
    const meme = gMeme
    meme.lines[meme.selectedLineIdx].fillColor = color
}

function alignChange(direction) {
    const meme = gMeme
    meme.lines[meme.selectedLineIdx].align = direction
}

function changeTextSize(amount) {
    const meme = gMeme
    meme.lines[meme.selectedLineIdx].size += amount
}

function moveLine(amount) {
    const meme = gMeme
    meme.lines[meme.selectedLineIdx].yPos += amount
}

function removeLine() {
    const meme = gMeme
    const linesAmount = meme.lines.length
    if (meme.selectedLineIdx + 1 === linesAmount) meme.selectedLineIdx--
    meme.lines.splice(meme.selectedLineIdx, 1)

}

function addLine(txt = 'Enter text :) ') {
    const meme = gMeme
    const line =
    {
        txt,
        font: 'impact',
        size: 60,
        align: 'center',
        fillColor: 'black',
        strokeColor: 'white',
        xPos: gElCanvas.width / 2,
        yPos: gElCanvas.height / 2
    }
    meme.selectedLineIdx = meme.lines.length // when I add a line I want the focus to be on it
    meme.lines.push(line)
}

function switchLineFocus() {
    const meme = gMeme
    const linesAmount = meme.lines.length
    if (meme.selectedLineIdx + 1 === linesAmount) meme.selectedLineIdx = 0
    else meme.selectedLineIdx++
}

function addRandomMeme() {
    createNewMeme()
    gMeme.selectedImgId = getRandomIntInclusive(1, gImgs.length)

    const amountOfLines = getRandomIntInclusive(1, 2)
    gMeme.lines = []
    for (let i = 0; i < amountOfLines; i++) {
        addLine()
        if (i === 0) gMeme.lines[i].yPos = 100
        else gMeme.lines[i].yPos = 400

        gMeme.lines[i].txt = getRandomSentence()
        gMeme.lines[i].size = getRandomIntInclusive(30, 60)
        gMeme.lines[i].fillColor = getRandomColor()
        gMeme.lines[i].strokeColor = getRandomColor()
    }
}

function saveMeme() {

    if (!gMeme.isSaved) {
        gMeme.isSaved = true
        gMeme.memeId = makeId()
        gMemes.push(gMeme)
    }
    gMeme.imgSrc = gElCanvas.toDataURL()
    saveToStorage(SAVE_KEY, gMemes)
    renderSavedMemes()
}

function loadSavedMemes() {

    if (loadFromStorage(SAVE_KEY)) {
        gMemes = loadFromStorage(SAVE_KEY)
        renderSavedMemes()
    }
}

function createNewMeme() {
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        isSaved: false,
        imgSrc: '',
        memeId: null,
        lines: [],
    }
    addLine('UPPER LINE')
    gMeme.lines[0].yPos = gElCanvas.height / 2 - gElCanvas.height / 2.5
    addLine('BOTTOM LINE')
    gMeme.lines[1].yPos = gElCanvas.height / 2 + gElCanvas.height / 2.5

}

