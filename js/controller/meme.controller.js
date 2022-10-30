'use strict'

let gElCanvas
let gCtx

let gLineIdx = 0
let gIconIdx = 0
let gLineDragIdx = -1

let gIsDown
let gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function initEditor(el){
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    selectImg(el)
    addListeners()
    renderIconsBar()
    renderMeme(el.src)

}

function renderMeme(img){
    
    if (!img){
        img = getUrl()
        drawImg(img)
    } else{
        drawImg(img)
    }
    
}

function drawConTent(){
    let lines = getMeme().lines
    lines.map((line,idx)=>{
        let {txt, x, y, size, align, color , isSelected} = line
        if (isSelected) drawBox(10, y-40,size)
            drawText(txt, x, y,size,color,align) 
    })
        let icon = getIcon()
        let {iconTxt,iconIdx,iconIdy} = icon
        drawText(iconTxt, iconIdx, iconIdy)
}

function drawImg(image) {
    const img = new Image() // Create a new html img element
    img.src = image // Send a network req to get that image, define the img src
    // When the image ready draw it on the canvas
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.clientWidth, gElCanvas.clientHeight)
      drawConTent()
    }
}

function addTxtRow(){
    gLineIdx++
    setSelectedLine(gLineIdx)
    renderMeme()
    document.querySelector('.txt-line-input').value = ''
    
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev 
    window.addEventListener('resize', () => {
      resizeCanvas()
      renderMeme()
    })
}
  
function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}
  
function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}
  
function onDown(ev) {
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    console.log('pos:',pos);
    gIsDown = true
    let lineIdx = lineClickedIdx(pos)
    if (lineIdx < 0) return
    gLineDragIdx = lineIdx
    gLineIdx = lineIdx
    setSelectedLine(gLineIdx)
    setTxtInput()
    renderMeme()
    //Save the pos we start from 
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    if (!gIsDown) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    setLineCoords(dx,dy,gLineDragIdx)
    gStartPos = pos
    renderMeme()
}
  
function onUp() {
    gIsDown = false
    gLineDragIdx = -1
    document.body.style.cursor = 'auto'
}
  
function getEvPos(ev) {

    //Gets the offset pos , the default pos
    let pos = {
      x: ev.offsetX,
      y: ev.offsetY
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
      //soo we will not trigger the mouse ev
      ev.preventDefault()
      //Gets the first touch point
      ev = ev.changedTouches[0]
      //Calc the right pos according to the touch screen
      pos = {
        x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
        y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
      }
    }
    return pos
}



function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}
  
function renderImg(img) {
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawBox(x =10, y=10,size = 50) {
    gCtx.strokeStyle = 'black'
    y += (50 - size)
    gCtx.strokeRect(x, y , 480,size)
}

function inputText(text, x, y) {
    setLineTxt(text,gLineIdx)
    renderMeme()
  }

function drawText(text, x = 250, y = 47,size,color,align){
    gCtx.lineWidth = 2
    gCtx.strokeStyle = color
    gCtx.fillStyle = 'black'
    gCtx.font = `${size}px Arial`
    gCtx.textAlign = align
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function changeTxtSize(num){
    setTxtSize(num, gLineIdx)
    renderMeme()
}
  
function clearCanvas() {
    clearMemeTxt()
    renderMeme()
}

function saveMeme(){
    resetSelectedLines()
    renderMeme()
    const data = gElCanvas.toDataURL
    console.log(data);
}

function downloadCanvas(elLink){
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL(/* DEFAULT: 'image/png'*/) // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    elLink.href = data // Put it on the link
    elLink.download = 'my-Meme' // Can change the name of the file
}

// The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}
  
  // CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = function (event) {
      let img = new Image() // Create a new html img element
      img.src = event.target.result // Set the img src to the img file we read
      // Run the callBack func, To render the img on the canvas
      img.onload = onImageReady.bind(null, img)
      // Can also do it this way:
      // img.onload = () => onImageReady(img)
    }
    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function changeColor(value){
    setColor(value,gLineIdx)
    renderMeme()
}

function choseIcon(idx){
    setIcon(gIconIdx + idx)
    renderMeme()
}

function changeRow(){
    if (!gLineIdx) gLineIdx++
    else gLineIdx--
    setSelectedLine(gLineIdx)
    renderMeme()
}

function clearRow(){
    clearTxt(gLineIdx)
    changeRow()
}

function renderIconsBar(){
    document.querySelector('.icon-1').innerText = getIconTxt(0 + gIconIdx)
    document.querySelector('.icon-2').innerText = getIconTxt(1 + gIconIdx)
    document.querySelector('.icon-3').innerText = getIconTxt(2 + gIconIdx)
}

function nextIcons(change){
    gIconIdx += change
    gIconIdx = (gIconIdx < 0) ? getLastIdx() : gIconIdx
    gIconIdx = (gIconIdx > getLastIdx()) ? 0 : gIconIdx

    renderIconsBar()
}

function setTxtInput(){
    let txt = getLineTxt(gLineIdx)
    document.querySelector('.txt-line-input').value = ''
    document.querySelector('.txt-line-input').placeholder = txt
}

function alignTxt(value,direction){
    setLineAlign(value,direction,gLineIdx)
    renderMeme()
}