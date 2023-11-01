const add=((a,b) => a+b);
const subtract=((a,b) => a-b);
const multiply=((a,b) => a*b);
const divide=((a,b) => a/b);

let operators={};
operators.add=add;
operators.subtract=subtract;
operators.multiply=multiply;
operators.divide=divide;

let num1='';
let num2='';
let operator=''; 
// use square brackets: operators[operator]

const operate = function(num1, num2, operator){
    const operation=operators[operator];
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    let string = operation(num1,num2);
    string = string.toString();
    let rounded = string.slice(0,11);
    return rounded;
}

const display = document.querySelector('#display');
display.setAttribute('style', 'border: 2px solid black; padding: 8px 8px 0px;height: 50px; width: 200px; background-color: #f0f0f0; border-radius: 4px; font-size: 30px; vertical-align: center;');
display.textContent = '';

const numbers = document.querySelector('#numbers');
numbers.setAttribute('class','display: flex; width: 40px;');
for(i=1;i<12;i++){
    if(i===10){
        const button = document.createElement('button');
        button.setAttribute('id', 0);
        button.textContent = 0;
        button.setAttribute('style', 'width: 50px; height: 50px; font-size: 30px;');
        numbers.appendChild(button);
        button.addEventListener('click', () => {
            display.textContent += button.id;
            if(operator===''){
                num1 += button.id;
            }else{
                num2 += button.id;
            }
        });
    }else if(i===11){
        const button = document.createElement('button');
        button.setAttribute('id', 'decimal');
        button.textContent = '.';
        button.setAttribute('style', 'width: 50px; height: 50px; font-size: 30px;');
        numbers.appendChild(button);
        button.addEventListener('click', () => {
            display.textContent += '.';
            if(operator===''){
                num1 += '.';
            }else{
                num2 += '.';
            }
        });
    }else{
        const button = document.createElement('button');
        button.setAttribute('id', i);
        button.textContent = i;
        button.setAttribute('style', 'width: 50px; height: 50px; font-size: 30px;');
        numbers.appendChild(button);
        button.addEventListener('click', () => {
            display.textContent += button.id;
            if(operator===''){
                num1 += button.id;
            }else{
                num2 += button.id;
            }
        });
    }
}

const clrBtn = document.querySelector('#clear');
clrBtn.addEventListener('click', () =>{
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
})

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () =>{
    if(operator!==''){
        num1=operate(num1,num2,operator);
        display.textContent = num1;
        num2='';
    }
    operator = addBtn.id;
    display.textContent += ' + ';
})

const subBtn = document.querySelector('#subtract');
subBtn.addEventListener('click', () =>{
    if(operator!==''){
        num1=operate(num1,num2,operator);
        display.textContent = num1;
        num2='';
    }
    operator = subBtn.id;
    display.textContent += " - ";
})

const multBtn = document.querySelector('#multiply');
multBtn.addEventListener('click', () =>{
    if(operator!==''){
        num1=operate(num1,num2,operator);
        display.textContent = num1;
        num2='';
    }
    operator = multBtn.id;
    display.textContent += ' x ';
})

const divBtn = document.querySelector('#divide');
divBtn.addEventListener('click', () =>{
    if(operator!==''){
        num1=operate(num1,num2,operator);
        display.textContent = num1;
        num2='';
    }
    operator = divBtn.id;
    display.textContent += ' / ';
})

const eqBtn = document.querySelector('#equals');
eqBtn.addEventListener('click', () => {
    if(num2===''){
        return;
    }else if(parseInt(num2)===0){
        display.textContent = '';
        num1 = '';
        num2 = '';
        operator = '';
        console.log(operator);
        alert('Cannot divide by 0!!');
    }else{
        display.textContent = operate(num1,num2,operator);
    }
})