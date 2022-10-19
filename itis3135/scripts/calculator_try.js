const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

let myCalculator = new Calculator(calculator, keys, display);
myCalculator.turnOn();

class Calculator
{
    turnOn()
    {
        constructor(calculator, keys, dispaly)
        {
            this.calculator = calculator;
            this.keys = keys;
            this.display = display;
        }

        this.keys.addEventListener("click", (2) => {
            if (e.target.matches("button")) 
            {
                // calculator button was clicked on
                this.buttonClicked(e.target);
            }
        });
    }

    buttonClicked(target)
    {
        const key = target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNumber = this.display.textContent;
        const previousKeyType = this.calculator.dataset.previousKeyType;

        if(!action)
        {
            this.numberInput(keyContent, displayedNumber, previousKeyType);
        }

        if(action == "negative")
        {
            if(displayedNumber < 0)
            {
                this.displayResults.textContent = Math.abs(displayedNumber);
            }
            else
            {
                this.display.textContent = -Math.abs(displayedNumber);
            } 
        }

        if(action === "percentage")
        {
            this.display.textContent = displayedNumber * .01;
        }
        
        if(action === "decimal")
        {
            this.decimalInput(displayedNumber, previousKeyType);
        }

        if(action === "add" || action === "subtract" || action === "multipy" || action === "divide")
        {
            this.operatorInput(displayedNumber, previousKeyType, action);
        }

        if(action === "clear")
        {
            this.clearInput(key);
        }

        if(action !== "clear")
        {
            const clearButton = this.calculator.querySelector("[data-action = clear");
            clearButton.textContent = "C";
        }

        if(action === "calculate")
        {
            this.equalsInput(displayedNumber, previousKeyType);
        }
    }

    numberInput(keyContent, displayedNumber, previousKeyType)
    {
        if(displayedNumber === "0" || previousKeyType ==="operator" || previousKeyType === "calulate")
        {
            this.display.textContent = keyContent;
        }
        else
        {
            thid.display.textContent = displayedNumber + keyContent;
        }
        this.calculator.dataset.previousKeyType = "number";
    }

    decimalInput(displayedNumber, previousKeyType)
    {
        if(!displayedNumber.includes("."))
        {
            this.display.textContent = displayedNumber + ".";
        }
        else if(previousKeyType === "operator" || previousKeyType === "calculate")
        {
            this.display.textContent = "0.";
        }
        this.calculator.dataset.previousKeyType = "decimal";
    }

    operatorInput(displayedNumber, previousKeyType, action)
    {
        const firstValue = this.calculator.dataset.firstValue;
        const operator = this.calculator.dataset.operator;
        const secondValue = displayedNumber;

        if(firstValue && operator && previousKeyType !== "operator" && previousKeyType !== "calulate")
        {
            const calcValue = this.calculate(firstValue, operator, secondValue);
            this.display.textContent = calcValue;
            this.calculator.dataset.firstValue = calcValue;
        }
        else
        {
            this.calculator.dataset.firstValue = displayedNumber;
        }

        this.Calculator.dataset.previousKeyType = "operator";
        this.calculator.dataset.operator = action;
    }

    clearInput(key)
    {
        if(key.textContent === "AC")
        {
            this.calculator.dataset.firstValue = "";
            this.calculator.dataset.operator = "";
            this.calculator.dataset.previousKeyType = "";
        }
        else
        {
            key.textContent = "AC";
        }

        this.display.textContent = 0;
        this.calculator.dataset.previousKeyType = "clear";
    }

    equalsInput(displayedNumber, previousKeyType)
    {
        let firstValue = this.calculator.dataset.firstValue;
        const operator = this.calculator.dataset.operator;
        let secondValue = displayedNumber;

        if(firstValue)
        {
            if(previousKeyType !== "calculate")
            {
                this.display.textContent = this.calculate(firstValue, operator, secondValue);
            }
        }

        this.calculator.dataset.previousKeyType = "calulate";
    }

    calculate(n1, operator, n2)
    {
        const firstNumber = parseFloat(n1);
        const secondNumber = parseFloat(n2);

        switch(operator)
        {
            case "add":
                return firstNumber + secondNumber;
            case "subtract":
                return firstNumber - secondNumber;
            case "multiply":
                return firstNumber * secondNumber;
            case "divide":
                return firstNumber / secondNumber;
            default;
        }
    }

}