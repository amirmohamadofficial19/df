var resultInput = document.getElementById('calc-result-input');
var firstNumber;
var secondNumber;
var result;
var operator;
var resetInputFLag = false;

function calcClear() {
    resultInput.value = 0;
}

function insertNumber(number) {
    resultInput.value = resetInputFLag ? number : resultInput.value + number;
    resetInputFLag = false;
    resultInput.value *= 1;
}

function onOperatorClick(op) {
    firstNumber = resultInput.value * 1;
    calcClear();
    operator = op;
}

function onEqualClick() {
    secondNumber = resultInput.value * 1;
    switch (operator) {
        case '*':
            result = firstNumber * secondNumber;
            break;
        case  '/':
            result = firstNumber / secondNumber;
            break;
        case  '+':
            result = firstNumber + secondNumber;
            break;
        case  '-':
            result = firstNumber - secondNumber;
            break;
    }
    resultInput.value = result;
    resetInputFLag = true;
}

function onDotClick() {
    resultInput.value = resultInput.value.toString() + '.';
}
