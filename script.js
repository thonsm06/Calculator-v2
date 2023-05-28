function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let number1 = '';
let number2 = '';
let operator = '';
let result = '';
//runs when user hit = or enter
function operate(operator, num1, num2) {
    add(num1, num2);
}

const display1 = document.querySelector('#upper');
const display2 = document.querySelector('#lower');

const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => button.addEventListener('click', e => {

    number1 += e.target.textContent;
    updateDisplay(e.target.textContent); //add the digit directly to display
}))

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', e => {

    if (number1 !== '' && operator !== '' && number2 !== ''){
        result = operate(operator, number1, number2);
        number1 = result;
        operator = e.target.textContent;
        display2.textContent = number1 + operator;
    } else if (number1 !== '' && operator !== '' && number2 === '') {
        operator = e.target.textContent;
        display1.textContent = number1 + operator;
    } else if (number1 !== '' && operator === '' && number2 === '') {
        operator = e.target.textContent;
        display1.textContent = number1 + operator;
        display2.textContent = '';
    }

    //updateDisplay(e.target.textContent);
}))

function updateDisplay(num1) {
    display2.textContent += num1;
};



const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearScreen);
function clearScreen() {
    display1.textContent = '';
    display2.textContent = '';
    number1 = '';
    number2 = '';
    operator = '';
};