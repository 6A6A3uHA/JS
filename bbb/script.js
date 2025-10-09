const polygon = document.getElementById('polygon')
const inp = document.getElementById('inp')
const btn = document.getElementById('btn')

function create() {
    const block = document.createElement('li')
    const elem = document.createElement('p')
    const button = document.createElement('button')
    elem.textContent = inp.value
    button.textContent = 'Ухади'
    block.classList.add('line')
    polygon.appendChild(block)
    block.appendChild(elem)
    block.appendChild(button)

    function del(params) {
        button.removeEventListener('click', del)
        block.remove()
    }
    button.addEventListener('click', del)
}


btn.addEventListener('click', create)