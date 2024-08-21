let display = document.getElementById("display");
buttons = document.querySelectorAll("button");

var displayValue = "";

for (item of buttons) {
  item.addEventListener("click", (calculateFunc) => {
    buttonText = calculateFunc.target.innerText;
    console.log("Button text is ", buttonText);

    if (buttonText == "*") {
      buttonText == "*";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "/") {
      buttonText == "/";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "+") {
      buttonText == "+";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "-") {
      buttonText == "-";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "C") {
      displayValue = "";
      display.value = displayValue;
    } else if (buttonText == "ON") {
      displayValue = "";
      display.value = displayValue;
    } else if (buttonText == "=") {
      display.value = eval(displayValue);
    } else {
      displayValue += buttonText;
      display.value = displayValue;
    }
  });
}
