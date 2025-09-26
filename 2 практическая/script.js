const btnl = document.getElementById('btnleft')
const btnr = document.getElementById('btnright')
const btna = document.getElementById('btnauto')
const binp = document.getElementById('binp')
const range = document.getElementById('1').children.length //достаем количество дочерних элементов блока slides
const resauto = document.getElementById('btnd')
const inp = document.getElementById('inp')
const res = document.getElementById('res')
let a = 0
let img = []
let flag = true
let flagb = true
let flagside = false
console.log(range);
for (let index = 0; index < range; index++) {
    img.push(index)   
}// Теперь нет необходимости после добавления фотографий каждый раз добавлять ноые значения в список

function slidel() {
    if (flag) {
        flag = false
        setTimeout(() => {
            flag = true
        }, 1000);
        if (a%img.length==0) {
            document.documentElement.style.setProperty('--transition', '0s')
            a = img.length-1
            document.documentElement.style.setProperty('--position', img[a]*-1220+'px')
            setTimeout(() => {
                document.documentElement.style.setProperty('--transition', '1s')
                a--
                a%=img.length
                document.documentElement.style.setProperty('--position', img[a]*-1220+'px')
            }, 1)}
        else{
            a--
            a%=img.length
            document.documentElement.style.setProperty('--position', img[a]*-1220+'px')}}}

function slider() {
    if (flag) {
        flag = false
        setTimeout(() => {
            flag = true
        }, 1000);
        if (a%img.length == img.length - 1) {
            document.documentElement.style.setProperty('--transition', '0s')
            a +=1
            document.documentElement.style.setProperty('--position', img[a]*-1220+'px')
            setTimeout(() => {
                document.documentElement.style.setProperty('--transition', '1s')
                a++
                a%=img.length
                document.documentElement.style.setProperty('--position', img[a]*-1220+'px')
            }, 1)}
        else{
            a++
            a%=img.length
            document.documentElement.style.setProperty('--position', img[a]*-1220+'px')
        }}}
    
autoslide = setInterval(() => {
    slider()
}, 3000);

function auto() {
    if (flagb) {
        if (flagside) {
            btna.classList.toggle('red')
            btna.classList.toggle('green')
            autoslide = setInterval(() => {
                slider()}, 3000);
            flagside = false}
        else{
            btna.classList.toggle('green')
            btna.classList.toggle('yellow')
            clearInterval(autoslide)
            setTimeout(() => {
                autoslide = setInterval(() => {
                slidel()}, 3000);
            }, 1);
            flagb = false
            flagside = true}
    }
    else{
        flagside = true
        flagb = true
        btna.classList.toggle('red')
        btna.classList.toggle('yellow')
        clearInterval(autoslide)
    }
}

function check_param() {
    res.innerHTML = ""
    if (isNaN(inp.value) || inp.value.trim() == "" || Number.isNaN(Number(inp.value))) {
        res.innerHTML = `<p>Что-то не число</p>`
        inp.value = ''
    }
    else{
        b=Number(inp.value)
        if (b>range-1 || b <= 0) {
            res.innerHTML = `<p>Фотографии на такой позиции нет</p>`
            inp.value = ''
        }
        else{
            document.documentElement.style.setProperty('--position', img[b-1]*-1220+'px')
            a = b-1
            inp.value = ''
        }
    }
}

binp.addEventListener('click', check_param)
btnl.addEventListener('click', slidel)
btna.addEventListener('click', auto)
btnr.addEventListener('click', slider)