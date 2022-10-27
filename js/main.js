'use strict'

function onInit(){
    renderGallery()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function toEditorMode(el){
    document.querySelector('.image-gallery').hidden = true
    document.querySelector('.meme-editor').hidden = false
    document.querySelector('.meme-editor').style.display = 'grid'
    document.querySelector('.gellery-nav').classList.remove('active')
    initEditor(el)
    
    
    
    
}

function toGalleryMode(){
    document.querySelector('.image-gallery').hidden = false
    document.querySelector('.meme-editor').hidden = true
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.gellery-nav').classList.add('active')
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