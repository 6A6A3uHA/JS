// console.log(1301);
// let me_cook
// const a = 15000
// me_cook = a
// me_cook +=1000
// console.log(a, me_cook);
// function kill_me(a,b,c,d) {
    // console.log('kill_me');
    // console.log(a+d);
    // console.log(b);
    // console.log(c);
    // console.log(d);
// }
// kill_me()
// let a =15
// let b = 10
// function sum(a,b) {
    // return a+b
// }
// console.log(sum(a,b));
// 
// function negativ(a,b) {
    // console.log(a-b);
    // 
// }
// negativ(a,b)
// function alerted() {
    // alert('Ваш комьпьютер захвачен.')
// }
// 
// const btn = document.getElementById("btn")
// console.log(btn);
// btn.addEventListener("click", alerted)

// function hi() {
    // alert("Приветствую")
// }
// const hello = document.getElementById("a")
// hello.addEventListener("click", hi)
// 
// function hay() {
    // alert("Как дела")
// }
// const how_are_you = document.getElementById("b")
// how_are_you.addEventListener("click", hay)
// 
// function byebye() {
    // alert("Пока")
// }
// const bye = document.getElementById("c")
// bye.addEventListener("click", byebye)
// const txt = document.getElementById("txt")
// function text() {
    // alert(txt.value)
// }
// const btn = document.getElementById("btn")
// btn.addEventListener("click", text)

let a=document.getElementById("a")
let b=document.getElementById("b")
const div1 = document.getElementById('div1')

function summ() {
    div1.textContent = '='+(Number(a.value)+Number(b.value))
    a.value = ""
    b.value = ""
    div1.innerHTML('<p>123</p>')
}
let btn = document.getElementById("btn")

btn.addEventListener('click', summ)