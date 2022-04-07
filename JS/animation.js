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
var playpause3 = document.getElementById('playpause3')
var playmusic3 = document.getElementById('playmusic3')
var pausemusic3 = document.getElementById('pausemusic3')
var music3 = document.getElementById('music3')
var playpause4 = document.getElementById('playpause4')
var playmusic4 = document.getElementById('playmusic4')
var pausemusic4 = document.getElementById('pausemusic4')
var music4 = document.getElementById('music4')
var playpause5 = document.getElementById('playpause5')
var playmusic5 = document.getElementById('playmusic5')
var pausemusic5 = document.getElementById('pausemusic5')
var music5 = document.getElementById('music5')
var playpause6 = document.getElementById('playpause6')
var playmusic6 = document.getElementById('playmusic6')
var pausemusic6 = document.getElementById('pausemusic6')
var music6 = document.getElementById('music6')


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
        music2.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        music6.pause()
        playmusic2.classList.remove('active')
        pausemusic2.classList.add('active')
        playmusic3.classList.remove('active')
        pausemusic3.classList.add('active')
        playmusic4.classList.remove('active')
        pausemusic4.classList.add('active')
        playmusic5.classList.remove('active')
        pausemusic5.classList.add('active')
        playmusic6.classList.remove('active')
        pausemusic6.classList.add('active')
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
        music1.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        music6.pause()
        playmusic1.classList.remove('active')
        pausemusic1.classList.add('active')
        playmusic3.classList.remove('active')
        pausemusic3.classList.add('active')
        playmusic4.classList.remove('active')
        pausemusic4.classList.add('active')
        playmusic5.classList.remove('active')
        pausemusic5.classList.add('active')
        playmusic6.classList.remove('active')
        pausemusic6.classList.add('active')
    }
    if (pausemusic2.classList.contains('active')) {
        music2.pause()
    }
}

playpause3.onclick = function () {
    playmusic3.classList.toggle('active')
    pausemusic3.classList.toggle('active')
    if (playmusic3.classList.contains('active')) {
        music3.play()
        music2.pause()
        music1.pause()
        music4.pause()
        music5.pause()
        music6.pause()
        playmusic2.classList.remove('active')
        pausemusic2.classList.add('active')
        playmusic1.classList.remove('active')
        pausemusic1.classList.add('active')
        playmusic4.classList.remove('active')
        pausemusic4.classList.add('active')
        playmusic5.classList.remove('active')
        pausemusic5.classList.add('active')
        playmusic6.classList.remove('active')
        pausemusic6.classList.add('active')
    }
    if (pausemusic3.classList.contains('active')) {
        music3.pause()
    }
}

playpause4.onclick = function () {
    playmusic4.classList.toggle('active')
    pausemusic4.classList.toggle('active')
    if (playmusic4.classList.contains('active')) {
        music4.play()
        music2.pause()
        music3.pause()
        music1.pause()
        music5.pause()
        music6.pause()
        playmusic2.classList.remove('active')
        pausemusic2.classList.add('active')
        playmusic3.classList.remove('active')
        pausemusic3.classList.add('active')
        playmusic1.classList.remove('active')
        pausemusic1.classList.add('active')
        playmusic5.classList.remove('active')
        pausemusic5.classList.add('active')
        playmusic6.classList.remove('active')
        pausemusic6.classList.add('active')
    }
    if (pausemusic4.classList.contains('active')) {
        music4.pause()
    }
}

playpause5.onclick = function () {
    playmusic5.classList.toggle('active')
    pausemusic5.classList.toggle('active')
    if (playmusic5.classList.contains('active')) {
        music5.play()
        music1.pause()
        music2.pause()
        music3.pause()
        music4.pause()
        music6.pause()
        playmusic2.classList.remove('active')
        pausemusic2.classList.add('active')
        playmusic3.classList.remove('active')
        pausemusic3.classList.add('active')
        playmusic4.classList.remove('active')
        pausemusic4.classList.add('active')
        playmusic1.classList.remove('active')
        pausemusic1.classList.add('active')
        playmusic6.classList.remove('active')
        pausemusic6.classList.add('active')
    }
    if (pausemusic5.classList.contains('active')) {
        music5.pause()
    }
}

playpause6.onclick = function () {
    playmusic6.classList.toggle('active')
    pausemusic6.classList.toggle('active')
    if (playmusic6.classList.contains('active')) {
        music6.play()
        music1.pause()
        music2.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        playmusic2.classList.remove('active')
        pausemusic2.classList.add('active')
        playmusic3.classList.remove('active')
        pausemusic3.classList.add('active')
        playmusic4.classList.remove('active')
        pausemusic4.classList.add('active')
        playmusic1.classList.remove('active')
        pausemusic1.classList.add('active')
        playmusic5.classList.remove('active')
        pausemusic5.classList.add('active')
    }
    if (pausemusic6.classList.contains('active')) {
        music6.pause()
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

    if (music3.currentTime == music3.duration) {
        playmusic3.classList.toggle('active')
        pausemusic3.classList.toggle('active')
        music3.currentTime = 0.0
    }

    if (music4.currentTime == music4.duration) {
        playmusic4.classList.toggle('active')
        pausemusic4.classList.toggle('active')
        music4.currentTime = 0.0
    }
    
    if (music5.currentTime == music5.duration) {
        playmusic5.classList.toggle('active')
        pausemusic5.classList.toggle('active')
        music5.currentTime = 0.0
    }

    if (music6.currentTime == music6.duration) {
        playmusic6.classList.toggle('active')
        pausemusic6.classList.toggle('active')
        music6.currentTime = 0.0
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