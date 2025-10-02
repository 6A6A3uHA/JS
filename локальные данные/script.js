// localStorage.setItem('name', 'Misha')
// a=localStorage.getItem('name')
// console.log(a);
// localStorage.removeItem('name')
// localStorage.clear()

const btns = document.getElementById('save')
const btne = document.getElementById('erase')
const inp = document.getElementById('inp')
const res = document.getElementById('res')
let a = localStorage.getItem('name')

function save()
    {localStorage.setItem('name', inp.value)
    if (inp.value == null|| inp.value.trim() == '')
        {res.innerText = 'Я тебя не знаю'
        inp.value=''
        localStorage.removeItem('name')}
    else
        {res.innerText = 'С возвращением '+inp.value
        inp.value=''}}

function erase()
    {localStorage.clear()
    res.innerText = 'Я тебя не знаю'
    inp.value=''}

if (a == null|| a.trim() == '')
    {res.innerText = 'Я тебя не знаю'}

else
    {res.innerText = 'С возвращением '+a}

btns.addEventListener('click', save)
btne.addEventListener('click', erase)
