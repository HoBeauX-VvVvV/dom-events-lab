/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.buttonNumber');
const operatorButtons = document.querySelectorAll('.buttonOperator');
const displayElement = document.querySelector('.display');
const equalsButton = document.querySelector('.buttonEquals')

let firstValue = '';
let secondValue = '';
let operatorValue = '';


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    value = event.target.innerText;
    displayElement.textContent += value;
    if (operatorValue === '') {
        firstValue += value; 
        console.log(`${firstValue} one`);
    } else {
        secondValue += value;
        console.log(`${secondValue} two`);
    }    
    });
});


operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
    operatorValue = event.target.innerText;
    displayElement.textContent = operatorValue;
    console.log(operatorValue);
   });
});

equalsButton.addEventListener('click', (event) => {
     value2 = event.target.innerText;
     displayElement.textContent += value2;
     secondValue += value2;
});




//const calculator = document.querySelector('#calculator')
//console.dir('equalsButton')
/*
calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        Value = event.target.innerText;
        displayElement.textContent += Value;
    } else if (event.target.classList.contains ('operator')) {
        firstValue = displayElement.textContent;
        operatorValue = event.target.innerText;
        displayElement.textContent = operatorValue;
    }
}); 
//console.log(firstValue);


operatorButtons.forEach(button => {
operatorButtons.addEventListener('click' , (evt) => {
 const value = button.textContent;
     if (value === 'C') {
        clear();
     } 
      firstValue = display.textContent;
    })
//})
equalsButton.addEventListener('click', (event) => {
   equals = event.target.innerText;
    displayElement.textContent = (equals)
});

/*-------------------------------- Variables --------------------------------*/
  
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const calculatorOperation = (firstValue, operator, secondValue) => {
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

//console.log(calculatorOperation(15, '/', 5));
