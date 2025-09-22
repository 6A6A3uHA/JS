const btn = document.getElementById('btn')
let a = 0
function changecolor() {
    // document.documentElement.style.setProperty('--color','green')
    a++
    a%=raduga.length
    document.documentElement.style.setProperty('--color', raduga[a])
}

btn.addEventListener('click', changecolor)

let raduga=['red','orange','yellow','green','blue','darkblue','purple']