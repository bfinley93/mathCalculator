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
  return cb(num1, num2);
}

function updateNumsBox(num) {
  num = parseInt(num);
  document.getElementById("numsBox").value =
    document.getElementById("numsBox").value * 10 + num;
}

function clearBox() {
  document.getElementById("numsBox").value = "";
  calcArray = [];
}

function operate(operator) {
  calcArray.push(operator);
  calcArray.push(document.getElementById("numsBox").value);
  document.getElementById("numsBox").value = "";
}

function equalsBtn() {
  let operatation = calcArray[0];
  calcArray.push(document.getElementById("numsBox").value);

  // TODO: I want to come back to this and see if there's a more elegant way of doing so.
  // TODO: For some reason negative numbers are showing their negative sign at the end of the number in HTML.
  if (operatation === "add") {
    document.getElementById("numsBox").value = calculator(
      add,
      calcArray[1],
      calcArray[2]
    );
  } else if (operatation === "subtract") {
    document.getElementById("numsBox").value = calculator(
      subtract,
      calcArray[1],
      calcArray[2]
    );
  } else if (operatation === "multiply") {
    document.getElementById("numsBox").value = calculator(
      multiply,
      calcArray[1],
      calcArray[2]
    );
  } else if (operatation === "divide") {
    document.getElementById("numsBox").value = calculator(
      divide,
      calcArray[1],
      calcArray[2]
    );
  } else if (operatation === "moduloDivide") {
    document.getElementById("numsBox").value = calculator(
      moduloDivide,
      calcArray[1],
      calcArray[2]
    );
  }

  calcArray = [];
}

let calcArray = [];
