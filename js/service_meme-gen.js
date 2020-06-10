'use strict';
console.log('memegen-service')

const gElCanvas = document.getElementById('meme-canvas');
var gCtx;

var gKeywords = {
    'happy': 12,
    'funny': 4,
    'ironic': 32,
    'amazed': 8,
}

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['angry', 'announce'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute'] },
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'i love puppies',
            size: 20,
            align: 'center',
            color: 'white'
        }
    ]
}

function getMeme() {
    return gMeme
}

function getImageById(id) {
    let idx = id - 1;
    return gImgs[idx]
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

function drawMemeText() {
    var meme = gMeme;
    var memeText = meme.lines[meme.selectedLineIdx].txt
    drawText(memeText, 150, 280)
}

function drawText(text, x, y) {
    gCtx.lineWidth = '2';
    gCtx.font = '28px impact';
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawMemeImg() {
    gCtx = gElCanvas.getContext('2d');
    var meme = gMeme;
    var id = meme.selectedImgId;
    var elImg = new Image();
    elImg.src = getImageById(id).url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawMemeText();
    }
}
 
function changeText(newText) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newText
    return gMeme
}

function getText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function changeImg(newImgId) {
    gMeme.selectedImgId = newImgId;
}