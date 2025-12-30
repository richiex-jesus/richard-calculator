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
        if (checkDecimals(print.textContent) == true) {
            print.textContent += decimal.textContent;
        } else {
            alert("invalid!");
        }
       
    });
}

function checkDecimals(content) {
    let checkingContent = content.split('');
    if (checkingContent.includes('.')) {
        return false
    } else return true;
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
        if (print.textContent % 1 !== 0) print.textContent = parseFloat(`${multiply(+a, +b)}`).toFixed(9);
    } else if (splitEquation.length >= 3 && splitEquation.includes('÷')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${divide(+a, +b)}`;
        if (print.textContent % 1 !== 0) print.textContent = parseFloat(`${divide(+a, +b)}`).toFixed(9);
    } else if (splitEquation.length >= 3 && splitEquation.includes('-')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${subtract(+a, +b)}`;
        if (print.textContent % 1 !== 0) print.textContent = parseFloat(`${subtract(+a, +b)}`).toFixed(9);
    } else if (splitEquation.length >= 3 && splitEquation.includes('+')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${add(+a, +b)}`;
        if (print.textContent % 1 !== 0) print.textContent = parseFloat(`${add(+a, +b)}`).toFixed(9);
    } else if (splitEquation.length >= 3 && splitEquation.includes('^')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        let print = document.querySelector('.print');
        print.textContent = `${exponent(+a, +b)}`;
        if (print.textContent % 1 !== 0) print.textContent = parseFloat(`${exponent(+a, +b)}`).toFixed(9);
    }   
}

printOperator();
pressEnter();
printDecimal();
backspace();
clear();
