function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function moduloDivide(num1, num2) {
    return num1 % num2;
}

function calculator(cb, num1, num2) {
    // for some reason they are passed as strings even when putting type=number on the input box in HTML.
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("answer").value = cb(num1, num2);
    return cb(num1, num2);
}
