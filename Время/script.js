// console.log('Привет');
// setTimeout(() => {
//     console.log('Пока');
//     }, 5000);

// console.log('Как дела');
// setTimeout(() => {
//     console.log('a');
    
// }, 5);

// let interval = setInterval(() => {
//    console.log('');
    
// }, 1);
// setTimeout(() => {
//     clearInterval(interval)
// }, 10000);
// setInterval(() => {
//     console.log('пока');
    
// }, 1);
const circle = document.getElementById('circle')
const inp = document.getElementById("inp")
const btn = document.getElementById('btn')
let a = 0
let interval = []
function timer(params) {
    let list = ['movedown', 'moveright']
    a = Number(inp.value)
    let b = 0
    
    interval.push(setInterval(() => {
        b++
        circle.innerHTML = `<p class = "center">${a}</p>`
        if (a <=0) {
            interval.forEach(element => {
                clearInterval(element)
            });

            interval = []
        }
        a--
        circle.classList.toggle(list[b%2])
    }, 1000))
}
btn.addEventListener('click', timer)
// setInterval(() => {
//     setTimeout(() => {
//         circle.classList.add('moveright')
//         setTimeout(() => {
//             circle.classList.add('movedown')
//             setTimeout(() => {
//                 circle.classList.remove('moveright')
//                 setTimeout(() => {
//                     circle.classList.remove('movedown')
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 4000);   