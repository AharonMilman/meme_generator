'use strict'

const gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

const gImgs = [
    { id: 1,  fileName: '1.jpg', keywords: ['trump', 'politics'] },
    { id: 2,  fileName: '2.jpg', keywords: ['puppy', 'cute'] },
    { id: 3,  fileName: '3.jpg', keywords: ['baby', 'cute', 'puppy'] },
    { id: 4,  fileName: '4.jpg', keywords: ['cat', 'sleep'] },
    { id: 5,  fileName: '5.jpg', keywords: ['baby', 'success'] },
    { id: 6,  fileName: '6.jpg', keywords: ['history', 'man'] },
    { id: 7,  fileName: '7.jpg', keywords: ['baby', 'cute'] },
    { id: 8,  fileName: '8.jpg', keywords: ['thinking'] },
    { id: 9,  fileName: '9.jpg', keywords: ['baby', 'evil'] },
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
        { txt: 'I sometimes eat Falafel', size: 20, align: 'left', color: 'red' }
    ]
}

const gMemes = []
gMemes.push(gMeme)

function getMeme(idx = 0){
    return gMemes[idx]
}



