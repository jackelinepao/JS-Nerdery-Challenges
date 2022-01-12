// Modify this file only
let number = 0;
function increase() {
  let buttonIncrease = document.getElementById("increase");
  buttonIncrease.onclick = function (e) {
    number++;
    document.getElementById("counter").innerHTML = number;
  };
};

function decrease() {
  let buttonDecrease = document.getElementById("decrease");
  buttonDecrease.onclick = function (e) {
    number--;
    document.getElementById("counter").innerHTML = number;
  };
};

increase();
decrease();