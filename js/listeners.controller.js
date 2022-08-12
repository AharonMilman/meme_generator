'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        renderCanvas()
    })
}

function addMouseListeners() {
    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchstart', onDown)
    // gElCanvas.addEventListener('touchend', onUp)
}