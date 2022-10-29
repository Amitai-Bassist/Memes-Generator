'use strict'

function renderGallery(value){
    renderGalleryImgs()
    renderCommonWords(value)
}

function onImgSelect(){
    setImg()
    renderMeme()
}

function renderCommonWords(){
    let wordsMap = getCommonWords()
    let words = Object.keys(wordsMap)
    let strHTML = ''
    words.map((word)=> {
        strHTML += `
        <span style="font-size:${wordsMap[word] *4}px;" class="common-word" onclick="onImgSearch('${word}')"">${word}</span>
        `
    })
    document.querySelector('.common-words').innerHTML = strHTML
}

function renderGalleryImgs(){
    let imgsUrl = getImgsForDisplay()
    let strHTML = ``
    imgsUrl.map((url,idx) => {
        strHTML += `<img class="img-${idx}" src="${url}" 
        alt="img for meme editor" 
        onclick="toEditorMode(this)">`
    })
    document.querySelector('.gallery-container').innerHTML = strHTML
}

function onImgSearch(value){
    setImgFilter(value)
    renderGallery(value)
    renderCommonWords()

}