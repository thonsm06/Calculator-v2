//#region basic math operation
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
//#endregion

function operate(num1, operator, num2) {
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

//#region variables declaration
let number1 = {value: ''};    //hold a string of number
let number2 = {value: ''};    //hold a string of number
let operator = {value: ''};   //hold a string of an operator
let result = '';     //hold a string of result, can be use for recall
let lastButton = ''; //hold a string of the last button pressed
const display1 = document.getElementById('upper');
const display2 = document.getElementById('lower');
//#endregion

//#region digits
//-----digit buttons-----//////////////////////////////
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => button.addEventListener('click', event => {
    setDecider(event, operator.value, number1, number2); //decide which sets the number should go into.
}));

function setDecider(e, op, num1, num2) {
    const num = e.target.textContent; //assign content to a local variable
    let str = ''; //temp var to store string for passing to display
    
    if (num1.value !== '' && op !== '') {
        str = addToSet(num2, num);
    } else if (op === '') { 
        str = addToSet(num1, num);
    }
    
    updateDisplay(display2, str); //reset display
}
//#endregion

function addToSet(set, num) {return set.value += num;} //update global variable, return a string to update display
function updateDisplay(dis, str) {dis.textContent = str;} //update display's content

//#region operators
//-----operator buttons-----//////////////////////////////
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', event => {
    opDecider(event, operator.value, number1, number2)
}));

function opDecider(e, op, num1, num2) {
    const newOp = e.target.textContent; //get the event's operator
    const n1 = num1.value;           //store set 1 to local
    const n2 = num2.value;           //store set 2 to local
    let str1 = '';
    let str2 = '';

    if (n1 !== '' && op !== '' && n2 !== ''){
        result = operate(n1, op, n2); //calculate equation
        num1.value = result; //set number1 to new total
        operator.value = newOp; //update global operator with the event op
        str1 = result + newOp; 
        str2 = n2;
    } else if (n1 !== '' && op !== '' && n2 === '') {
        operator.value = newOp;
        str1 = n1 + newOp;
    } else if (n1 !== '' && op === '' && n2 === '') {

        operator.value = newOp;
        str1 = n1 + newOp;
        str2 = '';
    }

    updateDisplay(display1, str1);
    updateDisplay(display2, str2);
}
//#endregion

//#region equal
//-----equal button-----//////////////////////////////
const equalButton = document.getElementById('=');
equalButton.addEventListener('click', event => {equal(event, operator, number1, number2);});
function equal(e, op, num1, num2) {
    const equation = `${num1.value} ${op.value} ${num2.value}`; //num1/op/num2
    result = operate(num1.value, op.value, num2.value);   //
    updateDisplay(display1, equation);   
    updateDisplay(display2, result); 
    clearVar(e.target.textContent)
}
//#endregion

//#region clear
//-----clear button-----//////////////////////////////
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearScreen);
function clearScreen() {
    display1.textContent = '';
    display2.textContent = '';
    clearVar('C');
};
//#endregion

//set global variables to empty string, except for lastButton
function clearVar(last){
    number1 = '';
    number2 = '';
    operator = '';
    lastButton = last;
}

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
}))
*/
