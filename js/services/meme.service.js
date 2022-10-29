'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 10, 'baby': 7, 'cynical': 8, 'animals':6} 

let gSearchTxt = ''

const gIcons = ['😎','😍','😂','😅','🤗','🍔']

var gImgs = [
    {id: 0, url: 'images/meme-imgs/0.jpg', keywords: []},
    {id: 1, url: 'images/meme-imgs/1.jpg', keywords: ['funny', 'politics','trump','funy face','american']},
    {id: 2, url: 'images/meme-imgs/2.jpg', keywords: ['cute', 'animals','animal','dog']},
    {id: 3, url: 'images/meme-imgs/3.jpg', keywords: ['cute', 'animals','animal','dog','baby']},
    {id: 4, url: 'images/meme-imgs/4.jpg', keywords: ['cat','animals','animal']},
    {id: 5, url: 'images/meme-imgs/5.jpg', keywords: ['funny', 'baby']},
    {id: 6, url: 'images/meme-imgs/6.jpg', keywords: ['funny', 'man']},
    {id: 7, url: 'images/meme-imgs/7.jpg', keywords: ['funny', 'baby','funy face']},
    {id: 8, url: 'images/meme-imgs/8.jpg', keywords: ['funny', 'cynical','smart']},
    {id: 9, url: 'images/meme-imgs/9.jpg', keywords: ['funny', 'baby','evil','laughing']},
    {id: 10, url: 'images/meme-imgs/10.jpg', keywords: ['funny', 'laughing','America']},
    {id: 11, url: 'images/meme-imgs/11.jpg', keywords: ['funny', 'yes','cute','win']},
    {id: 12, url: 'images/meme-imgs/12.jpg', keywords: ['funny', 'pointing','israeli']},
    {id: 13, url: 'images/meme-imgs/13.jpg', keywords: ['funny', 'movie','pointing']},
    {id: 14, url: 'images/meme-imgs/14.jpg', keywords: ['funny', 'black','rapper','america']},
    {id: 15, url: 'images/meme-imgs/15.jpg', keywords: ['funny', 'lord of the rings','movie']},
    {id: 16, url: 'images/meme-imgs/16.jpg', keywords: ['funny', 'laughing','movie','star']},
    {id: 17, url: 'images/meme-imgs/17.jpg', keywords: ['funny', 'politics', 'putin', 'russia']},
    {id: 18, url: 'images/meme-imgs/18.jpg', keywords: ['two', 'cartoon','movie','pointing']},
]
var gMeme = { 
    selectedImgId: 5, 
    selectedLineIdx: 0, 
    icons: {iconTxt: '', iconIdx:0 ,iconIdy: 0},
    lines: [ {txt:'', x: 250, y: 70, size: 60, align:'center', color:'red', isSelected: true},
    {txt:'', x: 250, y: 437, size: 60, align:'center', color:'red', isSelected: false},
    {txt:'', x: 250, y: 250, size: 60, align:'center', color:'red' , isSelected: false}] 
}

function selectImg(el){
    gMeme.selectedImgId = el.classList[0].split('-')[1]
    gImgs[gMeme.selectedImgId].url = el.src
}

function getMeme(){
    return gMeme
}

function setSelectedLine(index){
    gMeme.lines.map((line,idx) => {
        line.isSelected = (idx === index) ? true: false
    })
}

function getUrl(){
    return gImgs[gMeme.selectedImgId].url
}

function setLineTxt(txt,idx){
    gMeme.lines[idx].txt = txt 
}

function getCoords(idx){
    let {x,y} = gMeme.lines[idx]
    return {x, y: y - 37}
}

function setColor(value,idx){
    console.log('value',value);
    gMeme.lines[idx].color = value
}

function getColor(idx){
    return gMeme.lines[idx].color
}

function setTxtSize(num, idx){
    gMeme.lines[idx].size += num
    // gMeme.lines[idx].y += num/2

}

function getTextSize(idx){
    return gMeme.lines[idx].size
}

function setIcon(idx){
    gMeme.icons = {iconTxt: gIcons[idx], iconIdx:250,iconIdy:250}
}

function getIcon(){
    return gMeme.icons
}

function getCommonWords(){
    return gKeywordSearchCountMap
}

function getImgsForDisplay(){
    let imgs = gImgs.filter((img) => {
        return img.keywords.some(word => {
            return word.toLowerCase().includes(gSearchTxt.toLowerCase())
        })
    })
    return imgs.map((img)=> {return img.url}) 
     
}

function setImgFilter(value){
    gSearchTxt = value
}

function clearTxt(idx){
    gMeme.lines[idx].txt = ''
}

function getIconTxt(idx){
    return gIcons[idx]
}

function getLastIdx(){
    return gIcons.length - 3
}

function lineClickedIdx(clickedPos){
    
    let linegrab = gMeme.lines.findIndex(line => {
        return (clickedPos.y < line.y + 10 && clickedPos.y > line.y - 50 &&
            line.txt)
    })
    let line = gMeme.lines.find(line => {
        return (clickedPos.y < line.y + 10 && clickedPos.y > line.y - 50 &&
            line.txt)
    })
    console.log(line);
    console.log(linegrab);
    return linegrab
}

function setLineCoords(dx,dy,lineIdx){
    gMeme.lines[lineIdx].x += dx
    gMeme.lines[lineIdx].y += dy
    console.log('x:',gMeme.lines[lineIdx].x,'y:',gMeme.lines[lineIdx].y);
}

function getLineTxt(idx){
    return gMeme.lines[idx].txt
}