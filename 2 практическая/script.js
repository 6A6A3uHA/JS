const btnl = document.getElementById('btnleft')
const btnr = document.getElementById('btnright')
let a = 0
let img = ['0px', '-1200px', '-2400px']

function slidel() {
    a--
    if (a<0) {
        a = 2
    }
    a%=img.length
    document.documentElement.style.setProperty('--position', img[a])
}

function slider() {
    a++
    a%=img.length
    document.documentElement.style.setProperty('--position', img[a])
}
btnl.addEventListener('click', slidel)
btnr.addEventListener('click', slider)