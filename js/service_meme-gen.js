'use strict';
console.log('memegen-service')

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
            font: '28px impact',
            align: 'center',
            color: 'white',
            pos: { x: 150, y: 40 }
        }
    ]
}

// GET functions:

function getMeme() {
    return gMeme
}

function getImageById(id) {
    let idx = id - 1;
    return gImgs[idx]
}

function getText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function getPos() {
    return gMeme.lines[gMeme.selectedLineIdx].pos;
}

// CHANGE functions:

function changeText(newText) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newText
}

function changeImg(newImgId) {
    gMeme.selectedImgId = newImgId;
}

function increaseText() {
    gMeme.lines[0].font = gCtx.font = gCtx.font.replace(/\d+px/, (parseInt(gCtx.font.match(/\d+px/)) + 2) + "px");
}

function decreaseText() {
    gMeme.lines[0].font = gCtx.font = gCtx.font.replace(/\d+px/, (parseInt(gCtx.font.match(/\d+px/)) - 2) + "px");
}

function moveTextUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 5;
}

function moveTextDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 5;
}