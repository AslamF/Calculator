let add = function(a, b){
    let total = parseInt(a) + parseInt(b);
    return total;
};
console.log(add(500, 555));

let subtract = function(a, b){
    let total = a - b;
    return total;
};
console.log(subtract(50, 25));

let multiply = function(a, b){
    let total = a * b;
    return total;
};
console.log(multiply(50, 50));

let divide = function(a, b){
    let total = a / b;
    return total;
};
console.log(divide(25, 5));

let operate = function(operator, a, b){
    
        if (operator === "+"){
            return add(a, b);
        }
        else if (operator === "-"){
            return subtract(a, b);
        }
        else if (operator === "*"){
            return multiply(a, b);
        } 
        else if (operator === "/"){
            return divide(a, b);
        }
        else{
            return "need an operator!"
        }
};
console.log(operate("-", 25, 5));


const divideButton = document.getElementById("#divide");
const multiplyButton = document.getElementById("#multiply");
const subtractButton = document.getElementById("#subtract");
const additionButton = document.getElementById("#addition");
const equalButton = document.getElementById("#equal");
const clearButton = document.querySelector("#clear");

const operators = document.querySelectorAll(".operator");


const buttons = document.querySelectorAll(".number");
const buttonsArray = Array.prototype.slice.call(buttons);
const content = document.querySelector(".screen");

var displayValue = "";
var displayValue2 = "";
var initialValue;
var secondNumber;
var total;


let initialNumber = buttons.forEach(button =>{
    button.addEventListener("click", createNumber);
    
    
})


function createNumber(){
    buttonValue = this.innerText;
    displayValue += buttonValue;
    content.innerHTML="";
    content.append(displayValue);
    parseInt(displayValue);
    
}




operators.forEach(operator =>{
    operator.addEventListener("click", saveOperation);
    
});

function saveOperation(){
    console.log(displayValue);
    initialValue = displayValue;
    displayValue = "";
    operatorValue = this.innerText;
    content.append(operatorValue);
    if(operatorValue === "+"){
        console.log(add(initialValue, 3))

    }

    
}






/*
buttons.forEach(button=>{
    button.addEventListener("click", calculate);
   
})

function checkValue(){
    console.log(displayValue)
};

function calculate(){
    
      let buttonValue = parseInt(this.innerText);
      displayValue = displayValue + buttonValue;
      content.innerHTML = "";
      content.append(displayValue);  
      checkValue();   
    
      
};

*/












/*
theParent.addEventListener("click", addNumber, false);

function addNumber(e){
    if (e.target !== e.currentTarget) {
        let clickedButton = e.target.id;
        content.append(clickedButton);
    }
    e.stopPropagation();



    let buttonValue = this.innerText;
        numberButton = parseInt(buttonValue);
        content.append(numberButton);
        displayValue
}
*/

