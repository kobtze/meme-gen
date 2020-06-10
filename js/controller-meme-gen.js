'use strict';
console.log('memegen-controller')

function onInit() {
    // debugger;
    resizeCanvas();
    drawMemeImg();
    renderMemeText();
}

function renderMemeText() {
    var memeText = getText();
    var elTextInput = document.getElementById('meme-text')
    // console.log(elTextInput)
    elTextInput.value = memeText;
}

function onTxtEdit(el) {
    // console.log('onTxtEdit')
    var newText = el.value
    // console.log(newText)
    changeText(newText);
    drawMemeImg();
    renderMemeText()
}

function onClickGallery(el) {
    console.log('onClickGallery', el)
    var elSelectedImage = el.value;
    console.log(elSelectedImage)
    // var newImgId = el.value;
    // console.log(newImgId);
}