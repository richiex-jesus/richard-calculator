function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function exponent(a, b) {
    if (a == 0 || b == 0) {
        return 1
    } else {
        return a ** b;
    }
}

function keyboard() {
    document.addEventListener('keypress', (e) => {
        console.log(`${e.key}`);
        console.log((`${e.key}`).charCodeAt(0));
    })
}

keyboard();

function printOperator() {
    let operatorButtons = document.querySelectorAll('#operator-button');
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', () => {
            let print = document.querySelector('.print');
            let givenEquation = print.textContent;
            let splitEquation = givenEquation.split(" ");
            if (splitEquation.length >= 3) {
                operator(splitEquation);
            }
            let toBePrinted = operatorButton.textContent;
            print.textContent += " " + toBePrinted + " ";
        });
    });
 }

function pressEnter() {
    let enter = document.getElementById('enter');
    enter.addEventListener('click', () => {
        let print = document.querySelector('.print');
        let givenEquation = print.textContent;
        console.log(givenEquation);
        let splitEquation = givenEquation.split(' ');
        console.log(splitEquation);
        operator(splitEquation);
    })
}

function printDecimal() {
    let decimal = document.getElementById('decimal');
    decimal.addEventListener('click', () => {
        let print = document.querySelector('.print');
        let screenText = print.textContent;
        let checkPrint = screenText.split(' ');
        let checkNumber = checkPrint[checkPrint.length - 1];
        if (checkNumber.includes('.')) {
            return print.textContent;
        } else {
            print.textContent += decimal.textContent;
            alertLimit(print.textContent);
        }

    });
}

function alertLimit(toCheck) {
    if (toCheck.length > 26) {
        alert("too long! your input will be cleared!");
        let print = document.querySelector('.print');
        print.textContent = "";
    }
}

function roundDecimalValues(input) {
    if (Number.isFinite(+input) == false) {
        let print = document.querySelector('.print');
        print.textContent = parseFloat(+input).toFixed(9);
    } else {
        console.log(+input)
        return +input;
    }
}
  

function backspace() {
    let backspace = document.getElementById('backspace');
    backspace.addEventListener('click', () => {
        let print = document.querySelector('.print');
        let toBeRemoved = print.textContent;
        let removeCharacter = toBeRemoved.split('');
        delete removeCharacter[removeCharacter.length - 1];
        let newPrint = removeCharacter.join('');
        print.textContent = newPrint;
    })
}

function clear() {
    let clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        // alert('You have cleared the calculator!');
        let print = document.querySelector('.print');
        print.textContent = "";
    })
}

function operator(splitEquation) {
    
    if (splitEquation.length >= 3 && splitEquation.includes('×')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${multiply(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('÷')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${divide(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('-')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${subtract(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('+')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${add(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('^')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${exponent(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    }   
}

printOperator();
pressEnter();
printDecimal();
backspace();
clear();
