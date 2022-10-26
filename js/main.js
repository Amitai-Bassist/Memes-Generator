'use strict'

function onInit(){
    
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function toEditorMode(el){
    document.querySelector('.image-gallery').hidden = true
    document.querySelector('.meme-editor').hidden = false
    initEditor(el.src)
    

}

function toAboutMode(){
    document.querySelector('a .active').classList.remove('active')
}

// function onSetLang(lang) {
//     setLang(lang)
//     setDirection(lang)
//     doTrans()
// }

// function setDirection(lang) {
//     if (lang === 'he') document.body.classList.add('rtl')
//     else document.body.classList.remove('rtl')
// }