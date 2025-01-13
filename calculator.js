let currentInput = "";
let previousInput = "";
let operation = "";

function appendNumber(number) {
currentInput += number;
updateDisplay();
}

function clearDisplay() {
currentInput = "";
previousInput = "";
operation = "";
updateDisplay();
}

function setOperation(op) {
if (currentInput === "") return;
if (previousInput !== "") {
calculateResult();
}
operation = op;
previousInput = currentInput;
currentInput = "";
updateDisplay();
}

function calculateResult() {
let result;
const prev = parseFloat(previousInput);
const current = parseFloat(currentInput);
if (isNaN(prev) || isNaN(current)) return;

switch (operation) {
case "+":
result = prev + current;
break;
case "-":
result = prev - current;
break;
case "*":
result = prev * current;
break;
case "/":
result = prev / current;
break;
default:
return;
}

currentInput = result.toString();
operation = "";
previousInput = "";
updateDisplay();
}

function updateDisplay() {
if (operation) {
document.getElementById("display").value = previousInput + " " + operation + " " + currentInput;
} else {
document.getElementById("display").value = currentInput;
}
}
