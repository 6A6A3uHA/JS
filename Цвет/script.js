const btn = document.getElementById('btn')
function changecolor() {
    document.documentElement.style.setProperty('--color','green')
}

btn.addEventListener('click', changecolor)

let raduga=[]