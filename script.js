const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearD(){
    display.value = "";
}

function DeleteV(){
    console.log(display.value)
    display.value= display.value.slice(0,-1);
}

function calculate(){
    display.value = eval(display.value);
}