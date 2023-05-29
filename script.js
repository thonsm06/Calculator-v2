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
let numbers = [
    {value: ''},  
    {value: ''},
];
let operator = {value: ''};   //hold a string of an operator
let result = '';     //hold a string of result, can be use for recall
let lastButton = ''; //hold a string of the last button pressed
let currentInput = {value: '1'}; //1v2 track which number set is being input
const display1 = document.getElementById('upper');
const display2 = document.getElementById('lower');
//#endregion

//#region keyboard
window.addEventListener('keydown', event => {
    const key = event.key;
    //const reg = /^([-+/*]\d+(.\d+)?)*/;
    //const code = event.code;
    
    if (key.match(/[0-9]/)) {
        setDecider(key, operator.value, numbers[0], numbers[1]);
    } else if (key.match(/[-+/*]/)) {
        opDecider(key, operator.value, numbers[0], numbers[1]);
    } else if (key.match("Enter")) {
        equal(key, operator, numbers[0], numbers[1]);
    } else if (key.match("Escape")) {
    }


})
//#endregion

//#region digits
//-----digit buttons-----//////////////////////////////
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => button.addEventListener('click', event => {
    const num = event.target.textContent;
    setDecider(num, operator.value, numbers[0], numbers[1]); //decide which sets the number should go into.
}));

function setDecider(num, op, num1, num2) {
    //const num = e.target.textContent; //assign content to a local variable
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
    const newOp = event.target.textContent; //get the event's operator
    opDecider(newOp, operator.value, numbers[0], numbers[1])
}));

function opDecider(newOp, op, num1, num2) {
    //const newOp = e.target.textContent; //get the event's operator
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
    } else {
        //str1 = 
    }

    updateDisplay(display1, str1);
    updateDisplay(display2, str2);
}
//#endregion

//#region equal
//-----equal button-----//////////////////////////////
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', event => {equal(event, operator, numbers[0], numbers[1]);});

function equal(e, op, num1, num2) {
    const equation = `${num1.value} ${op.value} ${num2.value}`; //num1/op/num2
    result = operate(num1.value, op.value, num2.value);   //
    updateDisplay(display1, result);   
    updateDisplay(display2, ''); 
    clearVar('Enter')
}
//#endregion

const backspaceButton = document.getElementById('backspace');
backspaceButton.addEventListener('click', event => function(){
    //remove a digit from current input

    //number1 = number1.substring(0, number1.length - 1);
    //updateDisplay(display2, number1);
})


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
    numbers[0].value = '';
    numbers[1].value = '';
    operator = '';
    lastButton = last;
}

const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => button.addEventListener('mouseenter', (event) => {
    event.target.style.cssText = "border: 2px solid black;";
}))
allButtons.forEach(button => button.addEventListener('mouseleave', (event) => {
    event.target.style.cssText = "border: 1px solid grey;";
}))


//history
const historyContainer = document.createElement('div');
const display3 = document.createElement('div');
display3.classList.toggle('button');

function history() {

}