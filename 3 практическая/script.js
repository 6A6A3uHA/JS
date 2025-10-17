const del = document.getElementById("delete")
const verify_name = /^[А-Я][а-я]{1,}$/
const verify_date = /(0[1-9]|[1-2][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19[0-9][0-9]|20[01][0-9]|202[0-5])/
const form_account = document.forms.form_account
const err_account = document.getElementsByClassName("err")
const account_information = document.getElementById("account")
const nolog = document.getElementsByClassName("nologin")
const reg = document.getElementById("reg")
const test = document.getElementById("test")
const result = document.getElementById("result")
const unreg = document.getElementById("logout")
const test_or_result = {"inp":`input type="radio"`, "p":`p`}
const end_p = {"inp": "", "p":`</p>`}
let form_test = document
let user_rezult = {}
let list_rezult = {}
let list_account_rezult = []
let account = {}
let stroka = ""
let session = 0
let b = 0



session = localStorage.getItem("active_session")
 console.log(session, session != "0", session != null);
 
if (session != "0" && session !== null) 
    {
    account = JSON.parse(localStorage.getItem(session))
    stroka=`Имя:${account["name"]}\nДата:${account["date"]}\nПол:${account["sex"]}`
    account_information.innerText = stroka
    for ( let i = 0; i<nolog.length;i++) {nolog[i].classList.remove("hide")}
    look_test()
    }
else{
    for ( let i = 0; i<nolog.length;i++) {nolog[i].classList.add("hide")}
    }
// for (b = 0; b<5; b++) {
//     let variable="переменная"
//     list_rezult[variable+`${b}`]=b
//     console.log(list_rezult);
//     }
// localStorage.setItem("idsession")

console.log(localStorage.getItem("session0"));



function inner(variable) {
    let inp_or_p=variable // Следующую строчку лучше скрыть
    let test_html=`
            <h1>Тест по математике</h1>
            <div class="form">
                <form name="test" novalidate>
                    <div class="quest">
                        <p>Чему равна сумма 3-х углов треугольника:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="degree" value="0" checked>90°${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="degree" value="1">180°${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="degree" value="2">360°${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>Выберите правильный порядок математических действий:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="order_operations" value="0" checked>Сначала выполняется умножение и деление, затем сложение и вычитание${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="order_operations" value="1">Сначала выполняется сложение и вычитание, затем умножение и деление${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="order_operations" value="2">Все действия выполняются по порядку слева направо, независимо от стоящих знаков${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>Как называются два треугольника с равными углами и пропорциональными сторонами:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="similar" value="0" checked>Равносторонние${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="similar" value="1">Подобные${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="similar" value="2">Правильные${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>Что такое теорема:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="theorem" value="0" checked>Математическое утверждение, истинность которого установлена путём доказательства${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="theorem" value="1">Исходное положение какой-либо теории, принимаемое в рамках данной теории истинным без требования доказательства${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="theorem" value="2">Предположение или догадка, которая требует доказательства${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>С каких двух чисел начинаются Числа Фибоначчи:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="Fibonacchi" value="0" checked>0 и 1${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="Fibonacchi" value="1">1 и 3${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="Fibonacchi" value="2">0 и 2${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>Округлите десятичную дробь 3,65478 до сотых чисел:</p>
                        <input type="text" name="rounding" minlength="1" maxlength="5" placeholder="1,2345">
                    </div>
                    <div class="quest">
                        <p>Ось координат, которая проводится горизонтально, называется:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="coordinates" value="0" checked>Ось абсцисс${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="coordinates" value="1">Ось ординат${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="coordinates" value="2">Ось аппликат${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>Чему равен квадратный корень числа 484:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="root" value="0" checked>22${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="root" value="1">24${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="root" value="2">42${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>Чему равен модуль числа -7,8</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="module" value="0" checked>-7,8${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="module" value="1">7,8${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="module" value="2">8,7${end_p[inp_or_p]}</li>
                        </ul>
                    </div>
                    <div class="quest">
                        <p>Чтобы найти длину гипотенузы прямоугольного треугольника, нужно применить теорему:</p>
                        <ul>
                            <li><${test_or_result[inp_or_p]} name="Pythagoras" value="0" checked>Декарта${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="Pythagoras" value="1">Пифагора${end_p[inp_or_p]}</li>
                            <li><${test_or_result[inp_or_p]} name="Pythagoras" value="2">Пуанкаре${end_p[inp_or_p]}</li>
                        </ul>
                    </div>

                    <div class="center"><input type="submit" value="Сдать"></div>
                </form>
            </div>
            `
    return(test_html)
}



function login() {
        stroka = ""
        if (verify_name.test(form_account.name.value)&& //Проверка имени на соответствие
            verify_date.test(form_account.date.value)&& //Проверка даты на соответствие
            form_account.sex.value != 0) //Проверка выбора пола
            
            {
            err_account[0].classList.remove("showup")
            err_account[1].classList.remove("showup")
            err_account[2].classList.remove("showleft")
            account["name"]=form_account.name.value
            account["date"]=form_account.date.value
            account["sex"]=form_account.sex.value

            if (localStorage.getItem("session0") === null) 
                {
                    localStorage.setItem('session0', JSON.stringify(account))
                    session = `session0`
                    localStorage.setItem("active_session", session)
                }
            else
                {
                let b = 0
                do {
                    if (localStorage.getItem(`session${b}`) == JSON.stringify(account)) {
                        session = `session${b}`
                        break
                    } 
                    b++
                }while (localStorage.getItem(`session${b}`) !== null)
                console.log(session);
                
                if (session=="0") {
                    session = `session${b}`
                    localStorage.setItem(session,JSON.stringify(account))
                    localStorage.setItem("active_session", session)
                }
                else{
                    localStorage.setItem("active_session", session)
                    account = JSON.parse(localStorage.getItem(session))
                }
            }
            for ( let i = 0; i<nolog.length;i++) {nolog[i].classList.remove("hide")}
            
            stroka=`Имя:${account["name"]}\nДата:${account["date"]}\nПол:${account["sex"]}`

            account_information.innerText = stroka
            look_test()
            }
        else
            {
            if (!verify_name.test(form_account.name.value)) 
                {err_account[0].classList.add("showup")}
            else{err_account[0].classList.remove("showup")}
            
            if (!verify_date.test(form_account.date.value)) 
                {err_account[1].classList.add("showup")}
            else{err_account[1].classList.remove("showup")}

            if (!(form_account.sex.value == "1" || form_account.sex.value == "2")) 
                {err_account[2].classList.add("showleft")}
            else{err_account[2].classList.remove("showleft")}
            }
}

function logout() 
{   
    if (reg.classList.contains("look")) {}
    else{reg.classList.add("look")}

    if (test.classList.contains("look")) {test.classList.remove("look")}
    if (result.classList.contains("look")) {result.classList.remove("look")}
    localStorage.setItem("active_session", "0")
    for ( let i = 0; i<nolog.length;i++) {nolog[i].classList.add("hide")}
    account_information.innerText = ""
}

function addtest() {
    list_rezult["degree"]=form_test.degree.value
    list_rezult["order_operations"]=form_test.order_operations.value
    list_rezult["similar"]=form_test.similar.value
    list_rezult["theorem"]=form_test.theorem.value
    list_rezult["Fibonacchi"]=form_test.Fibonacchi.value
    list_rezult["rounding"]=form_test.rounding.value
    list_rezult["coordinates"]=form_test.coordinates.value
    list_rezult["root"]=form_test.root.value
    list_rezult["module"]=form_test.module.value
    list_rezult["Pythagoras"]=form_test.Pythagoras.value
    console.log(list_rezult);
    test.classList.remove("look")
}

function look_test() {
    reg.classList.remove("look")
    console.log(reg);
    
    form_account.reset()
    
    test.innerHTML=inner("inp")
    
    form_test = document.forms.test
    test.classList.add("look")
    console.log(test);
    form_test.addEventListener("submit", (event2) =>
        {
            event2.preventDefault()
            addtest()})
}

form_account.addEventListener('submit', (event1) =>
    {
        event1.preventDefault()
        login()
    })



unreg.addEventListener("click", logout)

del.addEventListener("click", ()=>{localStorage.clear(); localStorage.setItem("active_session", "0")})