'use strict'

const STORAGE_KEY = 'DB'

_createBooks()

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)

    if (!books || !books.length) {
    }
    // gBooks = books
    _saveBooksToStorage()
}

function _createBook(name, price,id = makeId()) {
    return {
        id: id 
        
    }
}

function getBooksForDisplay(){

}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}