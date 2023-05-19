

let title = document.createElement("h1")
title.setAttribute('class', 'header')
title.setAttribute('id','title')
title.innerHTML = "CACULATOR"
document.body.append(title)


let parent = document.createElement("div")

let description = document.createElement("p")
description.setAttribute('id', 'description')
description.innerText = "This is a sample Calculator created using HTML, CSS, Bootstrap and JavaScript. This can handle infix expressions too. "
parent.append(description)

let background = document.createElement("div")
background.setAttribute('class', 'bground')

let container = document.createElement("div")
container.setAttribute('class', 'container')
background.append(container)

let row1 = document.createElement("div")
row1.setAttribute('class', 'row')
container.append(row1)

let value = document.createElement('input')
value.setAttribute('class', 'display')
value.setAttribute('id', 'result')
value.setAttribute('placeholder', '0')
value.setAttribute('onkeypress', 'return numberOnly(event)')
row1.append(value)

let row2 = document.createElement('div')
row2.setAttribute('class', 'row')
container.append(row2)

let ac = document.createElement('button')
ac.setAttribute('class', 'col-2 button')
ac.setAttribute('id', 'clear')
ac.style.backgroundColor="red"
ac.style.color="whitesmoke"
ac.innerText = "AC"
row2.append(ac)

let ce = document.createElement('button')
ce.setAttribute('class', 'col-2')
ce.setAttribute('id', 'bckspce')
ce.innerText = "CE"
row2.append(ce)

let btnDot = document.createElement('button')
btnDot.setAttribute('class', 'col-2 button')
btnDot.innerText = "."
row2.append(btnDot)

let X = document.createElement('button')
X.setAttribute('class', 'col-2 button')
X.setAttribute('id', 'multiply')
X.innerText = "X"
row2.append(X)

let btn7 = document.createElement('button')
btn7.setAttribute('class', 'col-2 button')
btn7.setAttribute('id', '7')
btn7.innerText = "7"
row2.append(btn7)

let btn8 = document.createElement('button')
btn8.setAttribute('class', 'col-2 button')
btn8.setAttribute('id', '8')
btn8.innerText = "8"
row2.append(btn8)

let btn9 = document.createElement('button')
btn9.setAttribute('class', 'col-2 button')
btn9.setAttribute('id', '9')
btn9.innerText = "9"
row2.append(btn9)

let btnDivide = document.createElement('button')
btnDivide.setAttribute('class', 'col-2 button')
btnDivide.setAttribute('id', 'divide')
btnDivide.innerText = "/"
row2.append(btnDivide)


let btn4 = document.createElement('button')
btn4.setAttribute('class', 'col-2 button')
btn4.setAttribute('id', '4')
btn4.innerText = "4"
row2.append(btn4)

let btn5 = document.createElement('button')
btn5.setAttribute('class', 'col-2 button')
btn5.setAttribute('id', '5')
btn5.innerText = "5"
row2.append(btn5)

let btn6 = document.createElement('button')
btn6.setAttribute('class', 'col-2 button')
btn6.setAttribute('id', '6')
btn6.innerText = "6"
row2.append(btn6)

let btnSub = document.createElement('button')
btnSub.setAttribute('class', 'col-2 button')
btnSub.setAttribute('id', 'subtract')
btnSub.innerText = "-"
row2.append(btnSub)

let btn1 = document.createElement('button')
btn1.setAttribute('class', 'col-2 button')
btn1.setAttribute('id', '1')
btn1.innerText = "1"
row2.append(btn1)

let btn2 = document.createElement('button')
btn2.setAttribute('class', 'col-2 button')
btn2.setAttribute('id', '2')
btn2.innerText = "2"
row2.append(btn2)

let btn3 = document.createElement('button')
btn3.setAttribute('class', 'col-2 button')
btn3.setAttribute('id', '3')
btn3.innerText = "3"
row2.append(btn3)

let btnAdd = document.createElement('button')
btnAdd.setAttribute('class', 'col-2 button')
btnAdd.setAttribute('id','add')
btnAdd.innerText = "+"
row2.append(btnAdd)

let btn0 = document.createElement('button')
btn0.setAttribute('class', 'col-2 button')
btn0.setAttribute('id', '0')
btn0.innerText = "0"
row2.append(btn0)

let btn00 = document.createElement('button')
btn00.setAttribute('class', 'col-2 button')
btn00.setAttribute('id', '00')
btn00.innerText = "00"
row2.append(btn00)

let equal = document.createElement('button')
equal.setAttribute('class', 'col-5 equal ')
equal.setAttribute('id', 'equal')
equal.innerText = "="
row2.append(equal)


parent.append(background)

document.body.append(parent)


function numberOnly(e){
    var a = e.which || e.keycode;
    if((a >=40) && (a<=57)){
        return true;
    }
    else {
        alert("Only numbers are allowed");
        return false;
    }
}

let result = document.querySelector('#result')
let btn = document.querySelectorAll('.button')



    for (i of btn){
    i.addEventListener('click', (e)=>{
        btntext = e.target.innerText;

        if(btntext == "X"){
            btntext='*';
        }
        result.value+=btntext;
    })
}

equal.addEventListener('click', ()=>{
    result.value = eval(result.value)
    
})

ac.addEventListener('click', ()=>{
    result.value =""
})

let backspace = document.getElementById("bckspce")
backspace.addEventListener('click', ()=>{
    result.value = result.value.toString().slice(0, result.value.length - 1)
})