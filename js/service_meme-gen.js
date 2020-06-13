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
    { id: 3, url: 'img/3.jpg', keywords: [] },
    { id: 4, url: 'img/4.jpg', keywords: [] },
    { id: 5, url: 'img/5.jpg', keywords: [] },
    { id: 6, url: 'img/6.jpg', keywords: [] },
    { id: 7, url: 'img/7.jpg', keywords: [] },
    { id: 8, url: 'img/8.jpg', keywords: [] },
    { id: 9, url: 'img/9.jpg', keywords: [] },
    { id: 10, url: 'img/10.jpg', keywords: [] },
    { id: 11, url: 'img/11.jpg', keywords: [] },
    { id: 12, url: 'img/12.jpg', keywords: [] },
    { id: 13, url: 'img/13.jpg', keywords: [] },
    { id: 14, url: 'img/14.jpg', keywords: [] },
    { id: 15, url: 'img/15.jpg', keywords: [] },
    { id: 16, url: 'img/16.jpg', keywords: [] },
    { id: 17, url: 'img/17.jpg', keywords: [] },
    { id: 18, url: 'img/18.jpg', keywords: [] },
]

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I just love dem puppiz',
            size: 20,
            font: '28px impact',
            align: 'center',
            color: 'white',
            pos: { x: 250, y: 40 }
        },
        {
            txt: 'with all my heart and soul',
            size: 20,
            font: '28px impact',
            align: 'center',
            color: 'white',
            pos: { x: 250, y: 480 }
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

// SET functions:

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