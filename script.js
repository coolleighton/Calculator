// Selectors and variables //

const allClearBtn = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#delete");
const percentBtn = document.querySelector("#percent");
const plusBtn = document.querySelector("#plus");

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const timesBtn = document.querySelector("#times");

const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const divideBtn = document.querySelector("#divide");

const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const minusBtn = document.querySelector("#minus");

const zeroBtn = document.querySelector("#zero");
const decimalBtn = document.querySelector("#decimal");
const equalsBtn = document.querySelector("#equals");

const topText = document.querySelector("#top-text");
const botText = document.querySelector("#bot-text");

let displayTop = ""
let displayBot = ""
let firstNumber = ""
let secondNumber = ""
let operation = ""


// Number input event listeners  // 

oneBtn.addEventListener("click", function() {
    placeNumber(1)
})

twoBtn.addEventListener("click", function() {
    placeNumber(2)
})

threeBtn.addEventListener("click", function() {
    placeNumber(3)
})

fourBtn.addEventListener("click", function() {
    placeNumber(4)
})

fiveBtn.addEventListener("click", function() {
    placeNumber(5)
})

sixBtn.addEventListener("click", function() {
    placeNumber(6)
})

sevenBtn.addEventListener("click", function() {
    placeNumber(7)
})

eightBtn.addEventListener("click", function() {
    placeNumber(8)
})

nineBtn.addEventListener("click", function() {
    placeNumber(9)
})

zeroBtn.addEventListener("click", function() {
    placeNumber(0)
})

decimalBtn.addEventListener("click", function() {
    placeNumber(".")
})


// Operation event listeners // 

percentBtn.addEventListener("click", function() {
    placeOperation("%")
})

plusBtn.addEventListener("click", function() {
    placeOperation("+")
})

timesBtn.addEventListener("click", function() {
    placeOperation("*")
})

divideBtn.addEventListener("click", function() {
    placeOperation("/")
})

minusBtn.addEventListener("click", function() {
    placeOperation("-")
})

allClearBtn.addEventListener("click", function() {
    clearCalculator()
})

deleteBtn.addEventListener("click", function() {
    deleteCurrentInput()
})


// function to clear all numbers and operations then update DOM // 

function clearCalculator() {
    firstNumber = ""
    secondNumber = ""
    operation = ""
    updateScreen()
}


// function to determine if number selected is first or second and update DOM // 

function placeNumber(number) {
    if (!operation) {
        firstNumber += number
    }
    else {
        secondNumber += number
    }
    updateScreen()
}


// function to determine operation and update DOM // 

function placeOperation(operator) {
    if (firstNumber) {
        operation = operator
        updateScreen()
    }
}


// function to clear numbers one at a time and update DOM //

function deleteCurrentInput() {
    if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1)
    }
    else if (operation) {
        operation = ""
    }
    else if (firstNumber) {
        firstNumber = firstNumber.slice(0, -1)
    }
    updateScreen()
}


// function to update screen // 

function updateScreen() {
    topText.textContent = `${firstNumber} ${operation} ${secondNumber}`
}

