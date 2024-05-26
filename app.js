/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
console.log('button');

/*buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);  
    });
});*/
const displayElement = document.querySelector('.display');
let firstValue = 0;
let secondValue = 0;
let operatorValue = '';
const calculator = document.querySelector('#calculator')
const operatorButtons= document.querySelector('.buttonOperator')
const equalsButton = document.querySelector('.buttonEquals')

console.dir('equalsButton')

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
console.log(firstValue);


//operatorButtons.forEach(button => {
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
/*const calculatorOperation = (firstValue, operator, secondValue) => {
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
*/
//console.log(calculatorOperation(15, '/', 5));
