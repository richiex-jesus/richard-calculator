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

let print = document.querySelector('.print');

function keyboard() {
    document.addEventListener('keydown', (e) => {
        console.log(e);
        console.log((`${e.key}`).charCodeAt(0));
        let ascNum = `${(`${e.key}`).charCodeAt(0)}`;
        if (ascNum >= 48 && ascNum <= 57) {
            print.textContent += `${e.key}`;
        } else if ([42, 43, 45].includes(+ascNum)) {
            print.textContent += " " + `${e.key}` + " ";
        } else if (ascNum == 47) {
            print.textContent += " ÷ ";
        } else if (ascNum == 69) {
            let givenEquation = print.textContent;
            let splitEquation = givenEquation.split(' ');
            operator(splitEquation);
        } else if (ascNum == 46) {
            let screenText = print.textContent;
            let checkPrint = screenText.split(' ');
            let checkNumber = checkPrint[checkPrint.length - 1];
            if (checkNumber.includes('.')) {
                return print.textContent;
            } else {
                print.textContent += `${e.key}`;
                alertLimit(print.textContent);
            }
        } else if (ascNum == 66) {
            let toBeRemoved = print.textContent;
            let removeCharacter = toBeRemoved.split('');
            delete removeCharacter[removeCharacter.length - 1];
            let newPrint = removeCharacter.join('');
            print.textContent = newPrint;
        }
    })
}

function printOperator() {
    let operatorButtons = document.querySelectorAll('#operator-button');
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', () => {
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
        print.textContent = "";
    }
}

function roundDecimalValues(input) {
    if (Number.isFinite(+input) == false) {
        print.textContent = parseFloat(+input).toFixed(9);
    } else {
        // console.log(+input)
        return +input;
    }
}
  

function backspace() {
    let backspace = document.getElementById('backspace');
    backspace.addEventListener('click', () => {
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
        print.textContent = "";
    })
}

function operator(splitEquation) {
    if (splitEquation.length >= 3 && splitEquation.includes('×')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        print.textContent = `${multiply(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('÷')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        print.textContent = `${divide(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('-')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        print.textContent = `${subtract(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('+')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        print.textContent = `${add(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    } else if (splitEquation.length >= 3 && splitEquation.includes('^')) {
        let a = splitEquation[0];
        let b = splitEquation[2];
        print.textContent = `${exponent(+a, +b)}`;
        roundDecimalValues(+print.textContent);
    }   
}

keyboard();
printOperator();
pressEnter();
printDecimal();
backspace();
clear();
