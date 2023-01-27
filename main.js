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
    equals.addEventListener('click', function(){
        if (current_value != "" || previous_value != ""){
            calculate()
            userInput.textContent = "";
            currentScreen.textContent = previous_value;
        }
    })
    decimal.addEventListener('click', function(){
        add_decimal()
    })
    remove.addEventListener('click', function(){
        current_value = current_value.slice(0,-1);
        currentScreen.textContent = current_value;
    })
})

function numberSelected(n){
    if (current_value.length <=9){
        current_value += n
    }
}

function operatorSelected(operator){
    operator_sign = operator;
    previous_value = current_value;
    current_value = "";
}

function calculate(){
    previous_value = Number(previous_value);
    current_value = Number(current_value);
    if (operator_sign === '+') {
        previous_value += current_value;}
    else if (operator_sign === '-'){
        previous_value -= current_value;}
    else if (operator_sign === '÷'){
        previous_value /= current_value;}
    else if (operator_sign === 'x'){
        previous_value *= current_value;} 
    else {
        previous_value %= current_value;} 
    
    previous_value = round_num(previous_value);
    previous_value = previous_value.toString();
    current_value = previous_value.toString();
}

function round_num(n){
    return Math.round(n*1000) / 1000;
}

function add_decimal(){
    if(!current_value.includes(".")){
        current_value += ".";
        currentScreen.textContent = current_value;
    }
}