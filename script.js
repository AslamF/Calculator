let add = function(a, b){
    let total = a + b;
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
console.log(operate("", 25, 5));


const buttons = document.querySelectorAll("button");
const content = document.querySelector(".screen");
const theParent = document.querySelector(".buttons")

var text = "0";

theParent.addEventListener("click", addNumber, false);

function addNumber(e){
    if (e.target !== e.currentTarget) {
        let clickedButton = e.target.id;
        let text = content.append(clickedButton);
        console.log(text)
    }
}

