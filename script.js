const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        if (isValidExpression(display.value)) {
            display.value = eval(display.value); 
        } else {
            display.value = "Erro";
        }
    } catch (e) {
        display.value = "Erro";
    }
}

function isValidExpression(expression) { 
    return /^[0-9+\-*/.%() ]+$/.test(expression);
}

function calculateAdvanced(operation) {
    let value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = "Erro";
        return;
    }

    switch (operation) {
        case 'pow':
            let base = parseFloat(prompt("Digite a base:"));
            let exponent = parseFloat(prompt("Digite o expoente:"));
            if (isNaN(base) || isNaN(exponent)) {
                display.value = "Erro";
                return;
            }
            display.value = Math.pow(base, exponent);
            break;
        case 'sqrt':
            display.value = value >= 0 ? Math.sqrt(value) : "Erro";
            break;
        case 'factorial':
            display.value = factorial(value);
            break;
        case 'mdc':
            let num2 = parseFloat(prompt("Digite o segundo número:"));
            if (isNaN(num2)) {
                display.value = "Erro";
                return;
            }
            display.value = mdc(value, num2);
            break;
        case 'mmc':
            let num3 = parseFloat(prompt("Digite o segundo número:"));
            if (isNaN(num3)) {
                display.value = "Erro";
                return;
            }
            display.value = mmc(value, num3);
            break;
        default:
            display.value = "Erro";
    }
}

function factorial(n) {
    if (n < 0) return "Erro";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function mdc(a, b) {
    if (b === 0) {
        return a;
    }
    return mdc(b, a % b);
}

function mmc(a, b) {
    return Math.abs(a * b) / mdc(a, b);
}
