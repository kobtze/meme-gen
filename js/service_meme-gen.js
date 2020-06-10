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
    selectedLineCount: 1,
    lines: [
        {
            txt: 'One shall never eat Falafel',
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

function drawMemeImg() {
    gCtx = gElCanvas.getContext('2d');
    var meme = getMeme();
    var id = meme.selectedImgId;
    var elImg = new Image();
    elImg.src = getImageById(id).url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}
