let display = document.getElementById('display');
let currentInput = '';
let currentOperation = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function operation(op) {
    if (currentOperation && currentInput) {
        calculate();
    }
    firstOperand = currentInput;
    currentOperation = op;
    currentInput = '';
}

function calculate() {
    let secondOperand = currentInput;
    if (firstOperand === '' || currentOperation === '') return;

    switch (currentOperation) {
        case '+':
            currentInput = (parseFloat(firstOperand) + parseFloat(secondOperand)).toString();
            break;
        case '-':
            currentInput = (parseFloat(firstOperand) - parseFloat(secondOperand)).toString();
            break;
        case '*':
            currentInput = (parseFloat(firstOperand) * parseFloat(secondOperand)).toString();
            break;
        case '/':
            currentInput = (parseFloat(firstOperand) / parseFloat(secondOperand)).toString();
            break;
        default:
            return;
    }
    display.value = currentInput;
    currentOperation = '';
    firstOperand = '';
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    firstOperand = '';
    display.value = '';
}