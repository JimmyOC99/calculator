// GLOBAL VARIABLES //
let previous_value = "";
let current_value = "";
let operator_sign = "";

document.addEventListener("DOMContentLoaded", function(){
    // Store components on HTML in JS
    let clear = document.querySelector('.clear');
    let remove = document.querySelector('.delete');
    let decimal = document.querySelector('.decimal');
    let equals = document.querySelector('.equals');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let userInput = document.querySelector('.user-input');
    let currentScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener('click', function(e){
        numberSelected(e.target.textContent)
        currentScreen.textContent = current_value;
    }))
    operators.forEach((operator) => operator.addEventListener('click', function(e){
        operatorSelected(e.target.textContent)
        userInput.textContent = previous_value + " " + operator_sign;
        currentScreen.textContent = current_value;
    }))
    clear.addEventListener('click', function(){
        previous_value = "";
        current_value = "";
        operator_sign = "";
        userInput.textContent = current_value;
        currentScreen.textContent = current_value;
    })
})

function numberSelected(num){
    if (current_value.length <=9){
        current_value += num
    }
}

function operatorSelected(operator){
    operator_sign = operator;
    previous_value = current_value;
    current_value = "";
}