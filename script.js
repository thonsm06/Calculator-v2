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

let number1 = 0;
let number2 = 0;
let operator = '';

//runs when user hit = or enter
function operate(operator, num1, num2) {
    add(num1, num2);
}

const display = document.querySelector('#lower');

const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => button.addEventListener('click', e => {
    updateDisplay(e.target.textContent); //add the digit directly to display
}))

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', e => {
    //
    updateDisplay(e.target.textContent);
}))

function updateDisplay(num1) {
    display.textContent += num1;
};



const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearScreen);

function clearScreen() {
    display.textContent = '';
};