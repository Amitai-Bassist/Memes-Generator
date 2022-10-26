'use strict'

function onInit(){
    
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onSetLang(lang) {
    setLang(lang)
    setDirection(lang)
    doTrans()
}

function setDirection(lang) {
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
}