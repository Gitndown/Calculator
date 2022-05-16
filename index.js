// Set up the stack 
let stack = []; //start stack off as an empty array
let input = 0; //start index from zero

//this function will calculate the input stack when clicking the equals button

  const calculateStack = value => 
  {
    if (input !== 0) //conditional- if input is not 0
     { 
      input = parseFloat(input); //turn the string into a float number
  
      addToStack(input);//function from line 59, add the number to the stack
    }

//////////////////////////////////////////////////////////////////

  let output = value[0]; //declare output as the value of value
  let dividedByZero = 0; 

  // start the loop
  for (let i = 2; i < value.length; i = i + 2) 

  {
    switch (stack[i - 1]) //
    { 
      // ADD
      case "+":
        output += value[i];
        break;
      // MINUS
      case "-":
        output -= value[i];
        break;
      // DIVIDE
      case "÷":
        if (value[i] === 0) dividedByZero = 1;
        else output = output / value[i];
        break;
      // TIMES
      case "x":
        output = output * value[i];
        break;
    }
  }

  // if these operators are switched around this will break the code. 
  // //////////////////////////////
  output = output.toFixed(10); //converts a number to a string
  output = parseFloat(output); //converts string to a number

  if (dividedByZero === 1) 
  {
    clearAll();
    document.getElementById("output").innerHTML = "ERROR";
  } 
  else 
  {
    document.getElementById("output").innerHTML = output;
    input = output;
    stack = [];
  }
}

const addToStack = input => stack.push(input);

// ----------------------------------
const clearAll = (stack = [], input = 0) => (document.getElementById("output").innerHTML = "0");

// ----------------------------------

const number = button => //Created a function for any input assigned "number" onclick. Connected to each numer input. 
{ 
  if (    
    document.getElementById("output").innerHTML === "ERROR" ||
    (document.getElementById("output").innerHTML == "0" &&
      button != ".")
  ) //Conditional: if output is equal to error or if output is equal to 0
    // and button is not equal to "." 
  
  {
    document.getElementById("output").innerHTML = "";
  }
    // then innerHTML for the output should display as blank. 

  if (!(button === ".") || !input.match(/[.]/))
    // Conditional: if the decimal button is not clicked(input of button pressed is not decimal)
  {
    input += button;
    document.getElementById("output").innerHTML += button;
    // then innerHTML should display the assignment of the clicked button 
  }
}

// -------------------------------

const operate = button =>
{
  if (input !== 0 && input !== "-") {
    input = parseFloat(input);  // this will turn the string 
                                // into  a floating number
   
    addToStack(input);
    addToStack(button);  // adds the numeric input to the 
                         // array || equation
    document.getElementById("output").innerHTML += button;
    input = 0;           // grab the display element 
                         // change display innerHTML based off input selected 
  }
  // 
  if (button == "-" && isNaN(stack[0]) && input !== "-") {
    input = "-";         // if button is not a number
                         // then return to the first element in the stack
                         // and if input is equal to minus


    document.getElementById("output").innerHTML = "-";
  }
}
                         
