const gTrans = {
    'title': {
        en: 'Welcome to my bookshop!',
        es: 'Mis Cosas Por Hacer',
        he: 'ברוך הבא לחנות הספרים!'
    },
    'create': {
        en: 'Create new book',
        es: 'MVC - Modelo-Vista-Controlador',
        he: 'צור ספר חדש',
    }
}

let gCurrLang = 'en'

function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'

    let trans = transMap[gCurrLang]
    if (!trans) trans = transMap.en
    return trans
}

function doTrans() {
    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const trans = getTrans(transKey)
        el.innerText = trans
        if (el.placeholder) el.placeholder = trans
    })
}

function setLang(lang) {
    gCurrLang = lang
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num)
}

function formatDate(time) {
    const options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    }
    return new Intl.DateTimeFormat(gCurrLang, options).format(time)
}

function getlang(){
    return gCurrLang
}