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
let result = '';     //hold a string of result, can be use for recall
let lastButton = ''; //hold a string of the last button pressed
const display1 = document.getElementById('upper');
const display2 = document.getElementById('lower');

//-----digit buttons-----//////////////////////////////
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => button.addEventListener('click', event => {
    setDecider(event, operator, number1, lastButton); //decide which sets the number should go into.
}));

function setDecider(e, op, num1, lastBtn) {
    
    const val = e.target.textContent; //assign content to a local variable

    if (num1 !== '' && op !== '') {
        const str = addToSet(number2, val);
    } else if (op === '') { 
        const str = addToSet(number1, val);
    }
    
    updateDisplay(display2, str); //reset display
}
function addToSet(set, val) {set += val;} //update global variable
function updateDisplay(dis, val) {dis.textContent = val;} //update display's content

//-----equal button-----//////////////////////////////
const equalButton = document.getElementById('=');
equalButton.addEventListener('click', e => {
    const equation = `${number1} ${operator} ${number2}`; //num1/op/num2
    result = operate(operator, number1, number2);   //
    updateDisplay(display1, equation);   
    updateDisplay(display2, result); 
    clearVar('=');
});

//set global variables to empty string, except for lastButton
function clearVar(last){
    number1 = '';
    number2 = '';
    operator = '';
    lastButton = last;
}

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', e => {
    if (number1 !== '' && operator !== '' && number2 !== ''){
        result = operate(operator, number1, number2);
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

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearScreen);
function clearScreen() {
    display1.textContent = '';
    display2.textContent = '';
    clearVar('C');
};


//history
const historyContainer = document.createElement('div');
const display3 = document.createElement('div');
display3.classList.toggle('button');

function history() {

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