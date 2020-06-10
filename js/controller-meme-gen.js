'use strict';
console.log('memegen-controller')

function onInit() {
    resizeCanvas();
    drawMemeImg();
    renderMemeText();
}

function renderMemeText() {
    var memeText = getText();
    var elTextInput = document.getElementById('meme-text')
    elTextInput.value = memeText;
}

function onTxtEdit(el) {
    var newText = el.value
    changeText(newText);
    drawMemeImg();
    renderMemeText()
}

function onClickGallery(el) {
    var newImgId = el.getAttribute('value');
    changeImg(newImgId);
    drawMemeImg();
    renderMemeText();
}