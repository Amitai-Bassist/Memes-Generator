'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2, 'cynical': 2, 'animals':1} 

var gImgs = [
    {id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics','trump','funy face','american']},
    {id: 2, url: 'img/2.jpg', keywords: ['cute', 'animals','animal','dog']},
    {id: 3, url: 'img/3.jpg', keywords: ['cute', 'animals','animal','dog','baby']},
    {id: 4, url: 'img/4.jpg', keywords: ['cat','animals','animal']},
    {id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby']},
    {id: 6, url: 'img/6.jpg', keywords: ['funny', 'man']},
    {id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby','funy face']},
    {id: 8, url: 'img/8.jpg', keywords: ['funny', 'cynical','smart']},
    {id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby','evil','laughing']},
    {id: 10, url: 'img/10.jpg', keywords: ['funny', 'laughing','America']},
    {id: 11, url: 'img/11.jpg', keywords: ['funny', 'kiss','love']},
    {id: 12, url: 'img/12.jpg', keywords: ['funny', 'pointing','israeli']},
    {id: 13, url: 'img/13.jpg', keywords: ['funny', 'movie','pointing']},
    {id: 14, url: 'img/14.jpg', keywords: ['funny', 'black','rapper','america']},
    {id: 15, url: 'img/15.jpg', keywords: ['funny', 'lord of the rings','movie']},
    {id: 16, url: 'img/16.jpg', keywords: ['funny', 'laughing','movie','star']},
    {id: 17, url: 'img/17.jpg', keywords: ['funny', 'politics', 'putin', 'russia']},
    {id: 18, url: 'img/18.jpg', keywords: ['two', 'cartoon','movie','pointing']},
]
var gMeme = { 
    selectedImgId: 5, 
    selectedLineIdx: 0, 
    lines: [ { 
        txt: 'I sometimes eat Falafel', 
        size: 20, 
        align: 'left', 
        color: 'red' 
    } ] 
}

function createBox(){
    // gShape = {
    //     size: 60,
    //     color: 'blue',
    // }
}

function getMeme(){

}

function setLineTxt(){

}