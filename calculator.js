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
