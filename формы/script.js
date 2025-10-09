const form1 = document.forms.form1
let pass = true
form1.addEventListener('submit', (event)=>{
    
    event.preventDefault()
    console.log(form1.inp1.value);

    if (form1.inp1.validity.valid) {
        console.log();
        
        form1.err1.classList.add('show')
    }

    form1.reset()
    
    // console.log(form1.inp1.value);
    // console.log(form1.inp2.value);
    // console.log(form1.inp3.value);
    // console.log(form1.inp4.value);
    // console.log(form1.inp5.checked);
    
    
    
    // if (!form1.inp1.validity.valid) {
    //     pass = false
    // }
    // if (!form1.inp2.validity.valid) {
    //     pass = false
    // }});
    // if (pass) {
    //     form1.inp1.value =  'Отправлено'
    //     form1.inp2.value = 'Отправлено'
    //     setTimeout(() => {
    //         form1.inp1.value = ""
    //         form1.inp2.value = ""
    //     }, 500);
    // }
    // else{
    //     form1.inp1.value="Ошибка"
    //     form1.inp2.value="Ошибка"
    //     setTimeout(() => {
    //         form1.inp1.value = ""
    //     }, 500);
    })


