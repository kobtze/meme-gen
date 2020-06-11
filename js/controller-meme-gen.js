'use strict';
console.log('memegen-controller')

const gElCanvas = document.getElementById('meme-canvas');
var gCtx;

function onInit() {
    resizeCanvas();
    renderMemeImg();
    renderMemeTextInput();
}

// RENDER functions:

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

function renderMemeImg() {
    gCtx = gElCanvas.getContext('2d');
    var meme = getMeme();
    var id = meme.selectedImgId;
    var elImg = new Image();
    elImg.src = getImageById(id).url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawMemeText();
    }
}

function drawMemeText() {
    var meme = getMeme();
    meme.lines.forEach(function(value, idx) {
        var memeText = value.txt;
        var pos = getPos(idx);
        drawText(memeText, idx, pos.x, pos.y)
    })
}

function drawText(text, idx, x, y) {
    gCtx.lineWidth = '2';
    gCtx.font = getMeme().lines[idx].font;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function renderMemeTextInput() {
    var idx = getMeme().selectedLineIdx;
    var memeText = getText(idx);
    var elTextInput = document.getElementById('meme-text')
    elTextInput.value = memeText;
}

// ON-ACTION functions:

function onTxtEdit(el) {
    var newText = el.value
    changeText(newText);
    renderMemeImg();
    renderMemeTextInput()
}

function onClickGallery(el) {
    var newImgId = el.getAttribute('value');
    changeImg(newImgId);
    renderMemeImg();
}

function onIncrease() {
    increaseText();
    renderMemeImg();
}

function onDecrease() {
    decreaseText();
    renderMemeImg();
}

function onUpClick() {
    moveTextUp();
    renderMemeImg();
}

function onDownClick() {
    moveTextDown();
    renderMemeImg();
}

function onSwitchLines() {
    nextLine();
    renderMemeImg();
    renderMemeTextInput()
}