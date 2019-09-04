// Element Variables
const buttonElements = document.querySelectorAll("button");
const outputEl = document.querySelector("#output-value");
const historyEl = document.querySelector("#history-value");

// Logic & Numeric Variables
const numericOperators = ["+","-","*","/","%"];
const numerals = new RegExp("[0-9]")
let outputValue = "", historyValue = "";

const inputHandler = (value) => {

    if (value === "-" && ((!outputValue && !historyValue) || historyValue.toString().split(' ').length === 2)) {
        outputValue = "-"
    }
    
    else if (numerals.test(value)) {
        if (!outputValue) {
            outputValue = parseInt(value)
        } else  {
            outputValue = outputValue.toString().split('')
            outputValue.push(value)
            outputValue = parseInt(outputValue.join(''))
        };

    }
    
    else if (numericOperators.includes(value)) {
        if (historyValue && (historyValue.toString().split(' ').length < 2)) {
            historyValue = `${historyValue} ${value}`
        } else if (!historyValue) {
            historyValue = `${outputValue} ${value}`
            outputValue = ""
        }
    }
    
    else if (value === "=" && historyValue.split(' ')[1]) {
        historyValue = equateExpression(
            parseInt(historyValue.split(' ')[0]),
            historyValue.split(' ')[1],
            outputValue)
        outputValue = ""
    }
    
    else if (value === "clear") {
        outputValue = "", historyValue = "";
    }
    
    else if (value === "backspace" && outputValue.toString().length > 0) {

        if (outputValue.toString().length === 1) {
            outputValue = ""
        } else {
            outputValue = outputValue.toString().split('')
            outputValue.pop()
            outputValue = parseInt(outputValue.join(''))
        }
    }

    // Use the DOM to display the values to results
    outputEl.innerHTML = outputValue
    historyEl.innerHTML = historyValue
}

const equateExpression = (num1, op, num2) => {
    let result
    switch (op) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        case "%":
            result = num1 * (num2 / 100)
            break;
    }
    return result % 1 === 0 ? result : result.toFixed(3)
}