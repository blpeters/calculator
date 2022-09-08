console.log("sup console");

function Add(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return b - a;
}

function Multiply(a, b) {
  return a * b;
}

function Divide(a, b) {
  return b / a;
}

function Operate(operator, a, b) {
  //add switch case for each operator?
  let result;
  switch (operator) {
    case "+":
      result = Add(a, b);
      console.log("adding...");
      break;
    case "-":
      result = Subtract(a, b);
      console.log("Subtracting...");
      break;
    case "*":
      result = Multiply(a, b);
      console.log("Multiplying...");
      break;
    case "/":
      result = Divide(a, b);
      console.log("Dividing...");
  }
  return result;
}

//DOM Manipulation and populating variables.

let firstNumber;
let secondNumber;
let result;

//when a number is clicked, add it to a string UNTIL the user clicks on an operator, at which point, store it as a number in firstNumber.

//select the text on the calculator screen.
//listen for button presses on the digits.
//Add each button press as text on the screen continuously until an operator is pressed.
//once operator pressed, store text as a number in firstNumber.
//Repeat steps for second number.

//After operator is clicked, store the next numbers in a running string UNTIL the user clicks either on the equals button or another operator. At this point, compute and display the result if equals and store result as firstNumber
