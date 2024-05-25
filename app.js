/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
console.log('button');

/*buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);  
    });
});*/
const display = document.querySelector('.display');
let firstValue = 0;
let secondValue = 0;
let operatorValue = '';
const calculator = document.querySelector('#calculator')
console.log('calculator')

calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        firstValue = event.target.innerText;
        console.log(firstValue);
    } else if (event.target.classList.contains ('operator')) {
        operatorValue = event.target.innerText;
        console.log(operatorValue);
    }
});
/*-------------------------------- Variables --------------------------------*/
  
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const calculatorOperation = (num1, operator, num2) => {
        if (operator === '+') {
            return num1 + num2;
        } else if (operator === '-') {
            return num1 - num2;
        } else if (operator === '*') {
            return num1 * num2;
        } else if (operator === '/') {
            return num1 / num2;
        }
    };