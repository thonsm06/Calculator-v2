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

//runs when user hit = or enter
function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

let number1 = '';    //hold a string of number
let number2 = '';    //hold a string of number
let operator = '';   //hold a string of an operator
//let result = '';     //hold a string of result
let lastButton = ''; //hold a string of the last button pressed
const display1 = document.querySelector('#upper');
const display2 = document.querySelector('#lower');

//-----digit buttons-----//////////////////////////////
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => button.addEventListener('click', event => {
    addNumber(event, operator, number1, number2, lastButton);
}));

function addNumber(e, op, num1, num2, lastBtn) {
    let num = ''; //empty string to store the content and return
    if (lastBtn === '') {
        if (num1 !== '' && op !== '') {
            num = e.target.textContent; //add to number2
            number2 += num;
        } else if (op === '') { 
            num = e.target.textContent; //add to number1
            number1 += num;
        }
    } else if (lastBtn === '=' || lastBtn === 'C') {
        num = e.target.textContent; //add to number1
        number1 = num;
    }
    updateDisplay(display2, num); //reset display
}

function updateDisplay(dis, val) {
    dis.textContent = val;
}

/* digitButtons.forEach(button => button.addEventListener('click', (e) => {

    if (number1 !== '' && operator !== '') {
        number2 += e.target.textContent;
        display2.textContent = number2;
    } else if (operator === '') {
        number1 += e.target.textContent;
        display2.textContent = number1;
    }
    number1 += e.target.textContent;
    updateDisplay(e.target.textContent); //add the digit directly to display
})) */

const equalButton = document.querySelector('#=');
equalButton.addEventListener('click', e => {
    const equation = `${number1} ${operator} ${number2}`; //num1/op/num2
    result = operate(operator, number1, number2);   //
    updateDisplay(display1, equation);   
    updateDisplay(display2, result); 
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', e => {
    if (number1 !== '' && operator !== '' && number2 !== ''){
        
        const result = operate(operator, number1, number2);
        number1 = result;
        operator = e.target.textContent;
        display1.textContent = number1 + operator;
        display2.textContent = number2;
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
/* 
function updateDisplay(num1) {
    display2.textContent += num1;
};
 */
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearScreen);
function clearScreen() {
    display1.textContent = '';
    display2.textContent = '';
    number1 = '';
    number2 = '';
    operator = '';
    lastButton = 'C'
};


//history
const historyContainer = document.createElement('div');
const display3 = document.createElement('div');
display3.classList.toggle('button');

function history() {

}