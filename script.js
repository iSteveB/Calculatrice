const input = document.querySelector('input');
const buttons = document.querySelectorAll(".btn");
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');

input.value = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(input.value === 0){
            input.value = "";
        }else{
        input.value += button.innerText;
        }
    })
 });

 equal.addEventListener('click', () => {
    input.value = eval(input.value);
 })

 reset.addEventListener('click', () => {
    input.value = 0;
 })