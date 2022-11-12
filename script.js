let add = function(a, b){
    let total = parseInt(a) + parseInt(b);
    return total;
};


let subtract = function(a, b){
    let total = a - b;
    return total;
};


let multiply = function(a, b){
    let total = a * b;
    return total;
};


let divide = function(a, b){
    let total = a / b;
    return total;
};


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


const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector("#clear");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector("#backspace");


const screen = document.querySelector(".screen");


let operator ="";
let initialValue = "";
let currentValue="";
let total = "";


numbers.forEach((number) => number.addEventListener("click", (button)=>{
    handleNumber(button.target.textContent);
    
}))

operators.forEach((operator) =>  operator.addEventListener("click", (button)=>{
    handleOperator(button.target.textContent);
    
    
    
}));

equal.addEventListener("click", function(){
    if (currentValue !="" && initialValue !=""){
    calculate();
    currentValue = initialValue;
    };
})

clear.addEventListener("click", clearAll);

decimal.addEventListener("click", addDecimal);

backspace.addEventListener("click", back);

window.addEventListener('keydown', inputfunction) ;


function clearAll(){
    screen.textContent = "";
    initialValue ="";
    currentValue ="";
    operator ="";
    if(currentValue === ""){
        screen.textContent = "0";
    }
}

function handleNumber(num){

   
    if(currentValue.length <= 7){
        currentValue += num;
    };
    screen.textContent = currentValue;
}

function handleOperator(op){
 
    operator = op;
    initialValue = currentValue;
    currentValue = "";
    
}



function calculate(){
    initialValue = Number(initialValue);
    currentValue = Number(currentValue);
    

    if (operator === "+"){
        initialValue += currentValue;
        console.log(initialValue);
    }

    else if (operator === "-"){
        initialValue -= currentValue;
        console.log(initialValue);
    }
    else if (operator === "X"){
        initialValue *= currentValue;
        console.log(initialValue);
    }
   
    else if(operator === "/"){
        if(currentValue === 0){
            initialValue = "ERROR";
            screen.textContent ="";
            screen.textContent = initialValue;
            operator ="";
            return;
        }
        initialValue /= currentValue;
        console.log(initialValue);
    }
    
    
    initialValue = Math.round(initialValue * 1000) / 1000;

    initialValue = initialValue.toString();
    currentValue = currentValue.toString();
    screen.textContent = initialValue;

}

function addDecimal(){
    console.log("cicked")
    if(!currentValue.includes(".")){
        currentValue += ".";
    }
    return;

}

function back(){
    if (currentValue != ""){
        currentValue = currentValue.slice(0, -1);
    }
   
    screen.textContent = currentValue;
    if(currentValue === ""){
        screen.textContent ="0"
    }
    

}




function inputfunction(e){
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9){
        handleNumber(e.key);
    }
    if (e.key ==="Enter" || (e.key === "=") && currentValue!= "" && initialValue != ""){
        if (currentValue !="" && initialValue !=""){
            calculate();
            currentValue = initialValue;
            };
        
    }

    if (e.key === "+" || e.key == "-" || e.key === "/"){
        handleOperator(e.key);
    }
    if (e.key === "*"){
        handleOperator("X");
    }
    if (e.key === "."){
        addDecimal();
    }
    if (e.keyCode === 8){
        back();
        console.log("clicked")
    }
}




