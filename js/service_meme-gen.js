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
        },
        {
            txt: 'help me!',
            size: 20,
            font: '28px impact',
            align: 'center',
            color: 'white',
            pos: { x: 150, y: 280 }
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

function getText(lineIdx) {
    return gMeme.lines[lineIdx].txt;
}

function getPos(lineIdx) {
    return gMeme.lines[lineIdx].pos;
}

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx;
}

// CHANGE functions:

function changeText(newText) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newText
}

function changeImg(newImgId) {
    gMeme.selectedImgId = newImgId;
}

function increaseText() {
    var idx = getSelectedLineIdx();
    gMeme.lines[idx].font = gMeme.lines[idx].font.replace(/\d+px/, (parseInt(gMeme.lines[idx].font.match(/\d+px/)) + 2) + "px");
}

function decreaseText() {
    var idx = getSelectedLineIdx();
    gMeme.lines[idx].font = gMeme.lines[idx].font.replace(/\d+px/, (parseInt(gMeme.lines[idx].font.match(/\d+px/)) - 2) + "px");}

function moveTextUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 5;
}

function moveTextDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 5;
}

function nextLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === gMeme.lines.length - 1) ? 0 : gMeme.selectedLineIdx + 1;
}