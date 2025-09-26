const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const btn = document.getElementById("btn")
const reset = document.getElementById("reset")
const res = document.getElementById("res")


let aVal = ""
let bVal = ""
let cVal = ""

function clear() {
    a.value = ""
    b.value = ""
    c.value = ""
    res.innerHTML = ""
}


function what_triangle() {
    console.log("2 функция запустилась");
    
    if (aVal==bVal && aVal == cVal) 
        {
            console.log("Все стороны равны, треугольник равносторонний")
            res.innerHTML = "<p class = 'true'>Треугольник равносторонний.</p>"
        }
    else
    {
        if (aVal == bVal || aVal == cVal || bVal == cVal) 
            {
                console.log("2 стороны равны, треугольник равнобедренный");
                res.innerHTML = "<p class = 'true'>Треугольник равнобедренный</p>"
            }
        else
        {
            res.innerHTML = "<p class = 'true'>Треугольник разносторонний</p>"
        }
    }
    
}

function check_param() {
    res.innerHTML = ""
    console.log("1 функция запустилась");
    console.log(a.value, " ,", b.value, " ,", c.value)
    console.log("isNaN(a.value)-", isNaN(a.value), "isNaN(b.value)-", isNaN(b.value), "isNaN(c.value)-", isNaN(c.value))    
    
    if (isNaN(a.value) || isNaN(b.value) || isNaN(c.value) || a.value.trim() == "" || b.value.trim() == "" || c.value.trim() == "" || Number.isNaN(Number(a.value)) || Number.isNaN(Number(b.value)) || Number.isNaN(Number(c.value))) 
        {
            console.log("Что то не число")
            res.innerHTML = "<p class = 'false'>Вы ввели не число</p>"
        }
    else{console.log("Все числа");
             aVal = Number(a.value)
             bVal = Number(b.value)
             cVal = Number(c.value)
            if (aVal <= 0 || bVal <= 0 || cVal <= 0) 
            {console.log("Стороны отрицательные");
            res.innerHTML = "<p class = 'false'>Стороны не могут быть отрицательными или быть равны 0</p>"}

            else{console.log("Все числа положительные");
                if (aVal+bVal <= cVal || aVal+cVal <= bVal || bVal + cVal <= aVal)

                    {console.log("Сумма двух сторон не может быть меньше третьей стороны");
                    res.innerHTML = "<p class = 'false'>Сумма двух сторон не может быть меньше третьей стороны</p>"}

                else{what_triangle()}
            }
        }
}

btn.addEventListener("click", check_param)
reset.addEventListener("click", clear)
