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
var barr4 = document.getElementById('barr4')
var duration4 = document.getElementById('duration4')
var music4 = document.getElementById('music4')
var forwardmusic4 = document.getElementById('forwardmusic4')
var backmusic4 = document.getElementById('backmusic4')
var barr5 = document.getElementById('barr5')
var duration5 = document.getElementById('duration5')
var music5 = document.getElementById('music5')
var forwardmusic5 = document.getElementById('forwardmusic5')
var backmusic5 = document.getElementById('backmusic5')
var barr6 = document.getElementById('barr6')
var duration6 = document.getElementById('duration6')
var music6 = document.getElementById('music6')
var forwardmusic6 = document.getElementById('forwardmusic6')
var backmusic6 = document.getElementById('backmusic6')

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

backmusic4.onclick = function () {
    music4.currentTime = music4.currentTime -15.0
}

forwardmusic4.onclick = function () {
    music4.currentTime = music4.currentTime +15.0
}

backmusic5.onclick = function () {
    music5.currentTime = music5.currentTime -15.0
}

forwardmusic5.onclick = function () {
    music5.currentTime = music5.currentTime +15.0
}

backmusic6.onclick = function () {
    music6.currentTime = music6.currentTime -15.0
}

forwardmusic6.onclick = function () {
    music6.currentTime = music6.currentTime +15.0
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
    setInterval(() => {
        var resultado4 = (345*music4.currentTime)/music4.duration;
        duration4.style.width = parseInt(resultado4)+'px';
    }, 500);
    setInterval(() => {
        var resultado5 = (345*music5.currentTime)/music5.duration;
        duration5.style.width = parseInt(resultado5)+'px';
    }, 500);
    setInterval(() => {
        var resultado6 = (345*music6.currentTime)/music6.duration;
        duration6.style.width = parseInt(resultado6)+'px';
    }, 500);
})