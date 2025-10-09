// const polygon = document.getElementById('polygon')
// const inp = document.getElementById('inp')
// const btn = document.getElementById('btn')

// function create() {
//     const block = document.createElement('li')
//     const elem = document.createElement('p')
//     const button = document.createElement('button')
//     elem.textContent = inp.value
//     button.textContent = 'Ухади'
//     block.classList.add('line')
//     polygon.appendChild(block)
//     block.appendChild(elem)
//     block.appendChild(button)

//     function del(params) {
//         button.removeEventListener('click', del)
//         block.remove()
//     }
//     button.addEventListener('click', del)
// }


// btn.addEventListener('click', create)

const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const listclass = document.getElementsByClassName('hide')
let active = 0

console.log(listclass);


function change(newactive){
    console.log(active, newactive);
    
    listclass[active].classList.toggle('look')
    listclass[newactive].classList.toggle('look')
    active = newactive
}

// btn1.addEventListener('click', () => change(btn1.value))
// btn2.addEventListener('click', () => change(btn2.value))
// btn3.addEventListener('click', () => change(btn3.value))