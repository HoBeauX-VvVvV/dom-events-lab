/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.buttonNumber');
const operatorButtons = document.querySelectorAll('.buttonOperator');
const displayElement = document.querySelector('.display');
const equalsButton = document.querySelector('.buttonEquals')

/*-------------------------------- Variables --------------------------------*/
let firstValue = '';
let secondValue = '';
let operatorValue = '';
let result = 0;
//let isResult = 0;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => { 
    //if (isResult === result) {
     //   displayElement.textContent = '';
    //};    
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
   result = calculatorOperation(firstValue, operatorValue, secondValue);
   displayElement.textContent = result;
   firstValue = result;
   secondValue = '';
   operatorValue = '';
   //console.log( firstValue, secondValue, operatorValue);
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

/* I have identified two issues with this setup: 
First, if you carry out an operation and don't press clear after, 
and instead press a number key ( like you would with a normal calculator ) the result number stacks up with the 
next numbers pressed and decomes part of the firstValue variable. 
Second, because I have it set so that you can carry out a string of operations (2 + 2 = 4 * 2 = 8 / 2 = 4 ect.) if 
the clear button is pressed more than once, firstValue becomes undefined giving NaN to any operation carried out after.
I tried to account for these cases but was unable to find a workable solution*/