'use strict'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomSentence(){
    const amountOfWords = getRandomIntInclusive(1, 5)
    let rndSentence = ''
    const rndWordArr = gFunnyWords.slice()
    for(let i=0; i <amountOfWords; i++ ){
        const rndWord = rndWordArr.splice(getRandomIntInclusive(1, rndWordArr.length), 1)
        rndSentence = rndWord + ' ' + rndSentence
    }
    return rndSentence
}