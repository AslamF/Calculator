const buttons = document.querySelectorAll("buttons");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector("#clear");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector("#backspace");


const screen = document.querySelector(".screenContent");


let operator ="";
let initialValue = "";
let currentValue="";



numbers.forEach((number) => number.addEventListener("click", (button)=>{
    handleNumber(button.target.textContent);
    
}))

operators.forEach((operator) =>  operator.addEventListener("click", (button)=>{
    handleOperator(button.target.textContent);
    if (initialValue === "" && currentValue === ""){
        screen.textContent= "ERROR";
    }
    
}));

equal.addEventListener("click", function(){
    if (currentValue !="" && initialValue !=""){
    calculate();
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

    if(initialValue !== "" && currentValue !== "" && operator === ""){
        initialValue = "";
        screen.textContent = currentValue;
    }
   
    if(currentValue.length <= 7){
        currentValue += num;
        screen.textContent = currentValue;
    };
    
}



function handleOperator(op){
    if(initialValue === ""){
        initialValue = currentValue;
        operatorCheck(op);
    }
    else if (currentValue === ""){
        operatorCheck(op);
    }
    else{
        calculate();
        operator = op;

    }
    /*
    operator = op;
    initialValue = currentValue;
    currentValue = "";
    */
}



function operatorCheck(text){
    operator = text;
    screen.textContent= initialValue ;
    currentValue ="";
}


function calculate(){
    initialValue = Number(initialValue);
    currentValue = Number(currentValue);
    

    if (operator === "+"){
        initialValue += currentValue;
        
    }

    else if (operator === "-"){
        initialValue -= currentValue;
        
    }
    else if (operator === "X"){
        initialValue *= currentValue;
        
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
        
    }
    
    
    initialValue = Math.round(initialValue * 1000) / 1000;

    initialValue = initialValue.toString();
    currentValue = currentValue.toString();
    displayResult();

}

function displayResult(){
    if(initialValue.length > 12){
        screen.textContent = initialValue.slice(0, 10) + "...";
    }
    else{
        screen.textContent = initialValue;
        operator ="";
        currentValue = "";
    }
}














function addDecimal(){
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
        
    }

}



