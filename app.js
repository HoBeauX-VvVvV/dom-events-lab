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
        //console.log(`${firstValue} one`);
    } else {
        //displayElement.textContent = '';
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
        displayElement.textContent = '';
    } else {
    displayElement.textContent = operatorValue;
    console.log(operatorValue);
    }
   });
});

const calculatorOperation = (firstValue, operatorValue, secondValue) => {
    if (operatorValue === '+') {
        return firstValue + secondValue;
    } else if (operatorValue === '-') {
        return firstValue - secondValue;
    } else if (operatorValue === '*') {
        return firstValue * secondValue;
    } else if (operatorValue === '/') {
        return firstValue / secondValue;
    }
};

//console.log(calculatorOperation(15, '*', 15));

equalsButton.addEventListener('click', (event) => {
   const result = calculatorOperation(firstValue, operatorValue, secondValue);
   displayElement.textContent = result;
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


//console.log(calculatorOperation(15, '/', 5));
