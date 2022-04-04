var body = document.querySelector("body")
var loadtxt = document.getElementById('loadtxt')
var loadwindow = document.querySelector('.loadwindow')
var daynight = document.querySelector('.daynight')
var moon = document.querySelector('.moon')
var sun = document.querySelector('.sun')
var playpause1 = document.getElementById('playpause1')
var playmusic1 = document.getElementById('playmusic1')
var pausemusic1 = document.getElementById('pausemusic1')
var music1 = document.getElementById('music1')
var playpause2 = document.getElementById('playpause2')
var playmusic2 = document.getElementById('playmusic2')
var pausemusic2 = document.getElementById('pausemusic2')
var music2 = document.getElementById('music2')

if (localStorage.dark == 1) {
    moon.classList.toggle('active')
    sun.classList.toggle('active')
    body.classList.toggle('dark')
}

playpause1.onclick = function () {
    playmusic1.classList.toggle('active')
    pausemusic1.classList.toggle('active')
    if (playmusic1.classList.contains('active')) {
        music1.play()
    }
    if (pausemusic1.classList.contains('active')) {
        music1.pause()
    }
}

playpause2.onclick = function () {
    playmusic2.classList.toggle('active')
    pausemusic2.classList.toggle('active')
    if (playmusic2.classList.contains('active')) {
        music2.play()
    }
    if (pausemusic2.classList.contains('active')) {
        music2.pause()
    }
}

daynight.onclick = function () {
    moon.classList.toggle('active')
    sun.classList.toggle('active')
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }
    if (body.classList.contains('dark') == false) {
        localStorage.setItem('dark', 0)
    }
}

setInterval(() => {
    if (music1.currentTime == music1.duration) {
        playmusic1.classList.toggle('active')
        pausemusic1.classList.toggle('active')
        music1.currentTime = 0.0
    }

    if (music2.currentTime == music2.duration) {
        playmusic2.classList.toggle('active')
        pausemusic2.classList.toggle('active')
        music2.currentTime = 0.0
    }

    if (loadwindow.classList.contains('loaded') == false) {
        loadtxt.textContent="Loading."
        setTimeout(() => {
            loadtxt.textContent="Loading.."
        }, 200);
        setTimeout(() => {
            loadtxt.textContent="Loading..."
        }, 400);   
    }
}, 500);

function share () {

}

window.addEventListener("load", function () {
    setTimeout(() => {
        loadwindow.classList.add('opc0')
    }, 1500);
    setTimeout(() => {
        loadwindow.classList.add('loaded')
    }, 2000);
})