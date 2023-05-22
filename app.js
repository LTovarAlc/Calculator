function addToScreen(value){
    var screen = document.getElementById('screen');
    screen.value += value;
}

function resetScreen(){
    var screen = document.getElementById('screen');
    screen.value = '';
}

function calculate(){
    var screen = document.getElementById('screen');
    var expression = screen.value;
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
    var result = eval(expression);
    screen.value = result;
}

function deleteLastDigit(){
    var screen = document.getElementById('screen');
    var currentExpression = screen.value;
    var newExpression = currentExpression.slice(0, -1);
    screen.value = newExpression;
}