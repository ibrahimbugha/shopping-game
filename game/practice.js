var mone= localStorage.getItem("score456566")
let c= Number(localStorage.getItem("score456566"))
console.log(c)
    

console.log("your money");
var m = 0
console.log(m);

function first(){
    c = m+=1
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function two(){
    c+= m+=2
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function three(){
    c += m+=3
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function four(){
    c += m+=4
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function five(){
    c += m+=5
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function six(){
    c = m+=6
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function seven(){
    c = m+=7
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function eight(){
    c = m+=8
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function nine(){
    c = m+=9
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function ten(){
    c = m+=10
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function zero(){
    c = m=0
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'sound effect __ fail joke sound effect, funny sound effect.mp3'
    return ch ()
}
var xe =0
function double(){
    c = m*=2
    console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'Victory Sound Effect.mp4'
    return ch ()
}
function dob() {
    var xe = Number(document.getElementById("xe").value)

var txt = c =m*=xe
console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'Victory Sound Effect.mp4'
    return ch ()
}
function div() {
    var di = Number(document.getElementById("di").value)

var txt = c =m/=di
console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'sound effect __ fail joke sound effect, funny sound effect.mp3'
    return ch ()
}
function pls() {
    var pl = Number(document.getElementById("pl").value)

var txt = c =m+=pl
console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function dec() {
    var de = Number(document.getElementById("de").value)

var txt = c =m-=de
console.log(c)
    document.getElementById('txt').innerHTML = c
    document.getElementById('audio').src = 'Spongebob Sad - Sound Effect(HD).mp4'
     ch ()
}

function ch () {

    localStorage.setItem('score456566',c)
}
