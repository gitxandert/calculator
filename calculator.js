const add=((a,b) => a+b);
const subtract=((a,b) => a-b);
const multiply=((a,b) => a*b);
const divide=((a,b) => a/b);

let operators={};
operators.add=add;
operators.subtract=subtract;
operators.multiply=multiply;
operators.divide=divide;

let num1=0;
let num2=0;
let operator=''; 
// use square brackets: operators[operator]

const operate = function(num1, num2, operator){
    const operation=operators[operator];
    return operation(num1,num2);
}

const display = document.querySelector('#display');
display.setAttribute('style', 'border: 1px solid black; padding: 8px 8px 0px;height: 50px; border-radius: 2px; font-size: 30px; vertical-align: center;');
display.textContent = '';

const numbers = document.querySelector('#numbers');
numbers.setAttribute('class','display: flex; width: 40px;');
for(i=1;i<11;i++){
    if(i===10){
        const button = document.createElement('button');
        button.setAttribute('id', 0);
        button.textContent = 0;
        button.setAttribute('style', 'width: 50px; height: 50px; font-size: 30px;');
        numbers.appendChild(button);
        button.addEventListener('click', () => {
            display.textContent += button.id + ' ';
            if(num1===0){
                num1 = parseInt(button.id);
            }else{
                num2 = parseInt(button.id);
            }
        });
    }else{
        const button = document.createElement('button');
        button.setAttribute('id', i);
        button.textContent = i;
        button.setAttribute('style', 'width: 50px; height: 50px; font-size: 30px;');
        numbers.appendChild(button);
        button.addEventListener('click', () => {
            display.textContent += button.id + ' ';
            if(num1===0){
                num1 = parseInt(button.id);
            }else{
                num2 = parseInt(button.id);
            }
        });
    }
}

const clrBtn = document.querySelector('#clear');
clrBtn.addEventListener('click', () =>{
    display.textContent = '';
    num1 = 0;
    num2 = 0;
    operator = '';
})

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () =>{
    operator = addBtn.id;
    display.textContent += '+ ';
})

const subBtn = document.querySelector('#subtract');
subBtn.addEventListener('click', () =>{
    operator = subBtn.id;
    display.textContent += "- ";
})

const multBtn = document.querySelector('#multiply');
multBtn.addEventListener('click', () =>{
    operator = multBtn.id;
    display.textContent += 'x ';
})

const divBtn = document.querySelector('#divide');
divBtn.addEventListener('click', () =>{
    operator = divBtn.id;
    display.textContent += '/ ';
})

const eqBtn = document.querySelector('#equals');
eqBtn.addEventListener('click', () => {
    display.textContent += '= ' + operate(num1,num2,operator);
})