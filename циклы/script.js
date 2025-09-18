let num = document.getElementById("num")
let btn = document.getElementById("btn")
let res = document.getElementById("res")
function factorial(params) {
    let numVal = Number(num.value)
    let fact 
    for (let index = 1; index <= numVal; index++) {
        if (index == 1) {
            fact = index
        }
        fact = fact * index
    }
    res.innerHTML = `<p>Факториал числа ${numVal} это ${fact}`
}

btn.addEventListener('click', factorial)