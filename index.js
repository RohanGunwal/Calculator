const input = document.getElementById("input");

const buttons = document.querySelectorAll("button");

let lastValue = "",
  num = "",
  isCalculated = false;
input.value = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttonValue = e.target.value;
    if (isCalculated) {
      isCalculated = false;
      input.value = 0;
    }
    if (buttonValue === "C") {
      input.value = 0;
    }
    if (buttonValue === "=") {
      let calculatedValue = eval(input.value);
      input.value = calculatedValue;
      num = "";
      isCalculated = true;
    }
    if (buttonValue === "." && !num.includes(".")) {
      lastValue = buttonValue;
      input.value += buttonValue;
      num += buttonValue;
    }
    if (Number(buttonValue) >= 0) {
      lastValue = buttonValue;
      if (input.value === "0") {
        input.value = buttonValue;
      } else {
        input.value += buttonValue;
      }
      num += buttonValue;
    }
    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "/" ||
      buttonValue === "*"
    ) {
      if (Number(lastValue) >= 0) {
        num = "";
        lastValue = buttonValue;
        input.value += buttonValue;
      }
    }
    console.log(num);
  });
});
