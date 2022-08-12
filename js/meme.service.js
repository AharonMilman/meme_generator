'use strict'

const gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

const gFunnyWords = ['I','you', 'love', 'me', 'cat', 'dog', 'war', 'what', 'are', 'true', 'everybody', 'expectation', 'reality', 'big', 'small']

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

const gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        // {
        //     txt: 'I sometimes eat Falafel',
        //     font: 'david',
        //     size: 50,
        //     align: 'left',
        //     fillColor: '#e41111',
        //     strokeColor: 'yellow',
        //     xPos: 250,
        //     yPos: 250
        // },
        {
            txt: 'I am Batman',
            font: 'impact',
            size: 60,
            align: 'center',
            fillColor: 'black',
            strokeColor: 'yellow',
            xPos: 250,
            yPos: 100
        }
    ]
}

const gMemes = []
gMemes.push(gMeme)

let gSelectedMemeIdx = 0

function getMeme(idx = 0) {
    return gMemes[idx]
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
    console.log(txt)
    renderMeme()
}

function setImg(id) {
    gMeme.selectedImgId = id
    renderCanvas()
}

function changeStrokeColor(color) {
    const meme = getMeme(gSelectedMemeIdx)
    meme.lines[meme.selectedLineIdx].strokeColor = color
}

function changeFillColor(color) {
    const meme = getMeme(gSelectedMemeIdx)
    meme.lines[meme.selectedLineIdx].fillColor = color
}

function alignChange(direction) {
    const meme = getMeme(gSelectedMemeIdx)
    meme.lines[meme.selectedLineIdx].align = direction
}

function changeTextSize(amount) {
    const meme = getMeme(gSelectedMemeIdx)
    meme.lines[meme.selectedLineIdx].size += amount
}

function moveLine(amount) {
    const meme = getMeme(gSelectedMemeIdx)
    meme.lines[meme.selectedLineIdx].yPos += amount
}

function removeLine() {
    const meme = getMeme(gSelectedMemeIdx)
    const linesAmount = meme.lines.length
    if(meme.selectedLineIdx + 1 === linesAmount) meme.selectedLineIdx--
    meme.lines.splice(meme.selectedLineIdx, 1)

}

function addLine() {
    const meme = getMeme(gSelectedMemeIdx)
    const line =
    {
        txt: 'Enter text :) ',
        font: 'david',
        size: 40,
        align: 'center',
        fillColor: 'red',
        strokeColor: 'yellow',
        xPos: 300,
        yPos: 250
    }
    meme.selectedLineIdx = meme.lines.length // when I add a line I want the focus to be on it
    meme.lines.push(line)
}

function switchLineFocus(){
    const meme = getMeme(gSelectedMemeIdx)
    const linesAmount = meme.lines.length
    if(meme.selectedLineIdx + 1 === linesAmount) meme.selectedLineIdx = 0
    else meme.selectedLineIdx++
}

function addRandomMeme(){
    gMeme.selectedImgId = getRandomIntInclusive(1, gImgs.length)
    
    const amountOfLines = getRandomIntInclusive(1, 2)
    gMeme.lines = []
    for (let i=0 ; i < amountOfLines ; i++){
        addLine()
        if(i === 0) gMeme.lines[i].yPos = 100
        else gMeme.lines[i].yPos = 400
    
        gMeme.lines[i].txt = getRandomSentence()
        gMeme.lines[i].size = getRandomIntInclusive(30, 60)
        gMeme.lines[i].fillColor = getRandomColor()
        gMeme.lines[i].strokeColor = getRandomColor()
    }
}

