let text = "";
let received_operator = 0;

const root = document.querySelector(':root');
const display_text = document.getElementById('display_text');

const power_button = document.getElementById('power');
const clear_button = document.getElementById('clear');

const add_button = document.getElementById('add');
const subtract_button = document.getElementById('subtract');
const multiply_button = document.getElementById('multiply');
const divide_button = document.getElementById('divide');

const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');

const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');

function operate(num1, num2, operator) {
    console.log("operates");

    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === "−") {
        return num1 - num2;
    }
    else if (operator === "×") {
        return num1 * num2;
    }
    else if (operator === "÷") {
        return num1 / num2;
    }
    else console.log("Invalid operator...");
}

function update_text(input_text) {
    if (input_text === " + " || input_text === " − "
    || input_text === " × " || input_text === " ÷ ") {
        if (received_operator >= 1) {
            console.log("skipping");
            return;
        }
        ++received_operator;
    }
    if (text.length > 15) {
        console.log("skipping");
        return;
    }
    text += input_text;
    display_text.textContent = text;
}

function separate_text() {
    let separated_text = text.split(" ");
    let a = Number(separated_text[0]);
    let operator = separated_text[1];
    let b = Number(separated_text[2]);

    let return_value = operate(a, b, operator).toString();
    reset(return_value);
}

function reset(return_value) {
    received_operator = 0;
    return_value = Math.round(return_value * 100) / 100;
    text = return_value.toString();
    display_text.textContent = return_value;
}



power_button.addEventListener('click', () => {
    //useless!!!!!!!!!!!!!!!
}); 

clear_button.addEventListener('click', () => {
    location.reload(); 
}); 

equal.addEventListener('click', () => {
    separate_text();
}); 

add_button.addEventListener('click', () => {
    update_text(' + ');
});

subtract_button.addEventListener('click', () => {
    update_text(' − ');
});

multiply_button.addEventListener('click', () => {
    update_text(' × ');
});

divide_button.addEventListener('click', () => {
    update_text(' ÷ ');
});

decimal.addEventListener('click', () => {
    update_text('.'); 
}); 


button0.addEventListener('click', () => {
    update_text('0');
}); 

button1.addEventListener('click', () => {
    update_text('1');
}); 

button2.addEventListener('click', () => {
    update_text('2');
}); 

button3.addEventListener('click', () => {
    update_text('3');
}); 

button4.addEventListener('click', () => {
    update_text('4');
}); 

button5.addEventListener('click', () => {
    update_text('5');
});

button6.addEventListener('click', () => {
    update_text('6');
});

button7.addEventListener('click', () => {
    update_text('7');
});

button8.addEventListener('click', () => {
    update_text('8');
});

button9.addEventListener('click', () => {
    update_text('9');
});