function Add(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return a - b;
}

function Multiply(a, b) {
  return a * b;
}

function Divide(a, b) {
  return a / b;
}

function Operate(operator, a, b) {
  let total;
  switch (operator) {
    case "+":
      total = Add(a, b);
      break;
    case "-":
      total = Subtract(a, b);
      break;
    case "*":
      total = Multiply(a, b);
      break;
    case "/":
      total = Divide(a, b);
      break;
  }
  return total;
}

function ResetVariables(result) {
  screenText.innerText = result;
  firstNumber = result;
  secondNumber = undefined;
}

//DOM Manipulation and populating variables.

let activeInput = "";
let activeOperator = "";
let screenText = document.querySelector(".screen");
let firstNumber;
let secondNumber;
let result;
let equalsActive = false; //prevents multiple calculations if a user repeatedly clicks the equals button.

//when a number is clicked, add it to a string UNTIL the user clicks on an operator, at which point, store it as a number in firstNumber.

//select the text on the calculator screen.

//listen for button presses on the digits. Change active input as additional digits are pressed.

//TODO: Allow negative (-) only as the first value and decimal only once.

document.querySelectorAll(".digit").forEach((digit) => {
  digit.addEventListener("click", (e) => {
    //If statement to evaluate if size of input exceeds the screen limit
    if (activeInput.length <= 16) {
      activeInput += e.target.innerText;

      screenText.innerText = activeInput;
    }
  });
});

//OPERATOR HANDLING (+ - * /)

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", (e) => {
    equalsActive = false;
    //This if statement populates the operand variables so no operations occur until we have 2 operands.
    if (!firstNumber) {
      console.log("storing first number...");
      firstNumber = activeInput;
      activeInput = "";
      activeOperator = e.target.innerText;
      console.log("storing active operator..." + `${activeOperator}`);
    } else if (!secondNumber) {
      console.log("storing second number...");
      secondNumber = activeInput;

      //After second number is recorded, calculate:
      if (firstNumber && secondNumber) {
        //This calculates and continues the calculations if someone continues hitting operators instead of the equals button.
        result = Operate(
          `${activeOperator}`,
          parseFloat(firstNumber),
          parseFloat(secondNumber)
        );
        ResetVariables(result);
        activeOperator = e.target.innerText;
      }

      //After the calculation, make sure the new operator is updated and no other inputs are active as the user continues to input.
      activeInput = "";
      activeOperator = e.target.innerText;
    }
  });
});

//EQUALS HANDLING

document.querySelector("#equals").addEventListener("click", (e) => {
  if (equalsActive == false) {
    if (firstNumber && !secondNumber) {
      console.log("storing second number...");
      secondNumber = activeInput;
      activeInput = "";
      result = Operate(
        `${activeOperator}`,
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
    }
    equalsActive = true;
    ResetVariables(result);
  }
});
