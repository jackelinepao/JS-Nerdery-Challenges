/*
TO-DO:

- Modify this file only
- The calculator should be completely functional
*/
let numOne = 0;
let numTwo = 0;
let operator;
let display = document.getElementById("display")
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let add = document.getElementById("add");
let subtrack = document.getElementById("subtrack");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");
let equals = document.getElementById("equals");

if (display.textContent === "0") {
  display.textContent = ""
}

zero.onclick = function (e) {
  display.textContent = `${display.textContent}0`;
};
one.onclick = function (e) {
  display.textContent = `${display.textContent}1`;
};
two.onclick = function (e) {
  display.textContent = `${display.textContent}2`;
};
three.onclick = function (e) {
  display.textContent = `${display.textContent}3`;
};
four.onclick = function (e) {
  display.textContent = `${display.textContent}4`;
};
five.onclick = function (e) {
  display.textContent = `${display.textContent}5`;
};
six.onclick = function (e) {
  display.textContent = `${display.textContent}6`;
};
seven.onclick = function (e) {
  display.textContent = `${display.textContent}7`;
};
eight.onclick = function (e) {
  display.textContent = `${display.textContent}8`;
};
nine.onclick = function (e) {
  display.textContent = `${display.textContent}9`;
};
add.onclick = function (e) {
  numOne = display.textContent;
  operator = "sum";
  limpiar();
}
subtrack.onclick = function (e) {
  numOne = display.textContent;
  operator = "subtraction";
  limpiar();
}
multiplication.onclick = function (e) {
  numOne = display.textContent;
  operator = "multiplication";
  limpiar();
}
division.onclick = function (e) {
  numOne = display.textContent;
  operator = "division";
  limpiar();
}
equals.onclick = function (e) {
  numTwo = display.textContent;
  solveOperations();
}

function limpiar() {
  display.textContent = "";
}

function reset() {
  display.textContent = "";
  numOne = 0;
  numTwo = 0;
  operator = "";
}

function solveOperations() {
  let answer;
  if (operator === "sum") {
    answer = +numOne + +numTwo;
  } else if (operator === "subtraction") {
    answer = +numOne - +numTwo;
  }
  else if (operator === "multiplication") {
    answer = +numOne * +numTwo;
  }
  else if (operator === "division") {
    answer = +numOne / +numTwo;
  }
  reset();
  display.textContent = answer;
}
