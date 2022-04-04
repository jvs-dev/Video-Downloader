var barr1 = document.getElementById('barr1')
var duration1 = document.getElementById('duration1')
var music1 = document.getElementById('music1')
var forwardmusic1 = document.getElementById('forwardmusic1')
var backmusic1 = document.getElementById('backmusic1')
var barr2 = document.getElementById('barr2')
var duration2 = document.getElementById('duration2')
var music2 = document.getElementById('music2')
var forwardmusic2 = document.getElementById('forwardmusic2')
var backmusic2 = document.getElementById('backmusic2')
var barr3 = document.getElementById('barr3')
var duration3 = document.getElementById('duration3')
var music3 = document.getElementById('music3')
var forwardmusic3 = document.getElementById('forwardmusic3')
var backmusic3 = document.getElementById('backmusic3')

backmusic1.onclick = function () {
    music1.currentTime = music1.currentTime -15.0
}

forwardmusic1.onclick = function () {
    music1.currentTime = music1.currentTime +15.0
}

backmusic2.onclick = function () {
    music2.currentTime = music2.currentTime -15.0
}

forwardmusic2.onclick = function () {
    music2.currentTime = music2.currentTime +15.0
}

backmusic3.onclick = function () {
    music3.currentTime = music3.currentTime -15.0
}

forwardmusic3.onclick = function () {
    music3.currentTime = music3.currentTime +15.0
}

window.addEventListener("load", function () {
    setInterval(() => {
        var resultado1 = (345*music1.currentTime)/music1.duration;
        duration1.style.width = parseInt(resultado1)+'px';
    }, 500);
    setInterval(() => {
        var resultado2 = (345*music2.currentTime)/music2.duration;
        duration2.style.width = parseInt(resultado2)+'px';
    }, 500);
    setInterval(() => {
        var resultado3 = (345*music3.currentTime)/music3.duration;
        duration3.style.width = parseInt(resultado3)+'px';
    }, 500);
})