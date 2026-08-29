let input = ""
    
    
    
 // querySelectors 
let display = document.querySelector('.display')
let one = document.querySelector('.number1')
let two = document.querySelector('.number2')
let three = document.querySelector('.number3')
let four = document.querySelector('.number4')
let five = document.querySelector('.number5')
let six = document.querySelector('.number6')
let seven = document.querySelector('.number7')
let eight = document.querySelector('.number8')
let nine = document.querySelector('.number9')
let zero = document.querySelector('.number0')

    
// click handlers
    
function clickOne() {

     display.innerHTML = ' '
    input += "1"
    let one = document.createElement("p")
    one.textContent = input
    display.appendChild(one)  
}

function clickTwo() {
    display.innerHTML = ' '
    input += "2"
    let two = document.createElement("p")
    two.textContent = input
    display.appendChild(two)
}

function clickThree() {
    display.innerHTML = ' '
    input += "3"
    let three = document.createElement("p")
    three.textContent = input
    display.appendChild(three)
}

function clickFour() {
    display.innerHTML = ' '
    input += "4"
    let four = document.createElement("p")
    four.textContent = input
    display.appendChild(four)
}

function clickFive() {
    display.innerHTML = ' '
    input += "5"
    let five = document.createElement("p")
    five.textContent = input
    display.appendChild(five)
}

function clickSix() {
    display.innerHTML = ' '
    input += "6"
    let six = document.createElement("p")
    six.textContent = input
    display.appendChild(six)
}

function clickSeven() {
    display.innerHTML = ' '
    input += "7"
    let seven = document.createElement("p")
    seven.textContent = input
    display.appendChild(seven)
}

function clickEight() {
    display.innerHTML = ' '
    input += "8"
    let eight = document.createElement("p")
    eight.textContent = input
    display.appendChild(eight)
}

function clickNine() {
    display.innerHTML = ' '
    input += "9"
    let nine = document.createElement("p")
    nine.textContent = input
    display.appendChild(nine)
}

function clickZero() {
    display.innerHTML = ' '
    input += "0"
    let zero = document.createElement("p")
    zero.textContent = input
    display.appendChild(zero)
}

// event listeners 
 
one.addEventListener('click', clickOne)
two.addEventListener('click', clickTwo)
three.addEventListener('click', clickThree)
four.addEventListener('click', clickFour)
five.addEventListener('click', clickFive)
six.addEventListener('click', clickSix)
seven.addEventListener('click', clickSeven)
eight.addEventListener('click', clickEight)
nine.addEventListener('click', clickNine)
zero.addEventListener('click', clickZero)



// operation functions
function add() {}

function subtract() {}

function multiply() {}

function devide() {}

function operate() {}