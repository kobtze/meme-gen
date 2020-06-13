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
        var memeText = value.txt.toUpperCase();
        var pos = getPos(idx);
        drawText(memeText, idx, pos.x, pos.y)
    })
}

function drawText(text, idx, x, y) {
    gCtx.lineWidth = '1';
    gCtx.font = getMeme().lines[idx].font;
    gCtx.strokeStyle = 'black';
    gCtx.shadowColor = 'black';
    gCtx.shadowBlur = 5;
    gCtx.fillStyle = 'white';
    gCtx.textAlign = 'center';
    gCtx.strokeText(text, x, y);
    gCtx.fillText(text, x, y);
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

function onGalImgClick(el) {
    // debugger;
    var newImgId = el.getAttribute('value');
    changeImg(newImgId);
    document.getElementById('button-gallery').classList.remove('active');
    // document.querySelector('.image-gallery').style.display='none';
    document.querySelector('.meme-editor').removeAttribute('style');
    document.location = '#top';
    onInit();
    // setTimeout(function(){ renderMemeImg(); }, 300);
}

function onGalleryClick(el) {
    document.getElementById('button-gallery').classList.add('active');
    document.querySelector('.image-gallery').removeAttribute('style');
    document.querySelector('.meme-editor').style.display='none';
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