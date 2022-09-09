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
  console.log(b);
  if (b == 0) {
    alert("Can't divide by 0!");
    return 0;
  } else {
    return a / b;
  }
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
  screenText.innerText = Math.round(result * 10000) / 10000; //rounds number to the 10000th for display purposes only.
  firstNumber = result;
  secondNumber = undefined;
  result = "";
  document.getElementById("negative").classList.remove("disabled");
}

//DOM Manipulation and populating variables.

let activeInput = "";
let activeOperator = "";
let screenText = document.querySelector(".screen");
let firstNumber;
let secondNumber;
let result;
let equalsActive = false; //prevents multiple calculations if a user repeatedly clicks the equals button.

//TODO: Allow negative (-) only as the first value and decimal only once.

//DIGITS HANDLING

document.querySelectorAll(".digit").forEach((digit) => {
  digit.addEventListener("click", (e) => {
    //If statement to evaluate if size of input exceeds the screen limit
    if (activeInput.length <= 16) {
      activeInput += e.target.innerText;

      screenText.innerText = activeInput;
    }
    if (activeInput != "") {
      document.getElementById("negative").classList.add("disabled");
    }
  });
});

//OPERATOR HANDLING (+ - * /)

//TODO: Once an operator is pressed, display that button in an active state on the screen until another operator, clear, or equals is pressed.

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", (e) => {
    //TODO: remove any current active states and add active state to current button

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

//CLEAR HANDLING

document.querySelector("#clear").addEventListener("click", (e) => {
  screenText.innerText = 0;
  firstNumber = "";
  secondNumber = "";
  activeInput = "";
  result = "";
  document.getElementById("negative").classList.remove("disabled");
});
