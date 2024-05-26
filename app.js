/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.buttonNumber');
const operatorButtons = document.querySelectorAll('.buttonOperator');
const displayElement = document.querySelector('.display');
const equalsButton = document.querySelector('.buttonEquals')

/*-------------------------------- Variables --------------------------------*/

let firstValue = '';
let secondValue = '';
let operatorValue = '';
let isResult = '';
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => { 
    value = event.target.innerText;
    displayElement.textContent += value;
    if (operatorValue === '') {
        firstValue += value; 
        //console.log(`${firstValue} one`);
    } else {
        secondValue += value;
        //console.log(`${secondValue} two`);
    }    
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
    displayElement.textContent = '';
    operatorValue = event.target.innerText
    if (operatorValue === 'C') {
        firstValue = '';
        secondValue = '';
        operatorValue = '';
    } else {
    displayElement.textContent = '';
    //displayElement.textContent = operatorValue;
    //console.log(operatorValue);
    }
   });
});

equalsButton.addEventListener('click', (event) => {
   const result = calculatorOperation(firstValue, operatorValue, secondValue);
   displayElement.textContent = result;
   firstValue = result;
   secondValue = '';
   operatorValue = '';
});

/*-------------------------------- Functions --------------------------------*/

const calculatorOperation = (firstValue, operatorValue, secondValue) => {
    if (operatorValue === '+') {
        return parseInt(firstValue) + parseInt(secondValue);
    } else if (operatorValue === '-') {
        return firstValue - secondValue;
    } else if (operatorValue === '*') {
        return firstValue * secondValue;
    } else if (operatorValue === '/') {
        return firstValue / secondValue;
    }
};

