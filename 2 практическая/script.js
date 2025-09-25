const btnl = document.getElementById('btnleft')
const btnr = document.getElementById('btnright')
const btna = document.getElementById('btnauto')
const range = document.getElementById('1').children.length //достаем количество дочерних элементов блока slides
let a = 0
let img = []
let flag = true
let flagb = false
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
            document.documentElement.style.setProperty('--position', img[a]*-1220+'px')}}
        
    
    
}

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
        flagb = false
        btna.classList.toggle('red')
        btna.classList.toggle('green')
        autoslide = setInterval(() => {
    slider()
}, 3000);
    }
    else{
        flagb = true
        btna.classList.toggle('red')
        btna.classList.toggle('green')
        clearInterval(autoslide)
    }
}


btnl.addEventListener('click', slidel)
btna.addEventListener('click', auto)
btnr.addEventListener('click', slider)