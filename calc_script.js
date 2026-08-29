let input = ""
let result = undefined
    
    
    
 // querySelectors 
    // digits
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

    // operators
let plus = document.querySelector('.add')
let minus = document.querySelector('.subtract')
let times = document.querySelector('.multiply')
let divide = document.querySelector('.Divide')

    // special buttons

let clear = document.querySelector('.clear')
let equal = document.querySelector('.Equal')

    
// click handlers

    // digits
    
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
    input += "7"
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

    // operators 

function clickPlus() {
    display.innerHTML = ' '
    if (input.length > 2) {input = input.split(" ")
    console.log(input)
    
    if (input.includes('+')) add()
    if (input.includes('-')) subtract()
    if (input.includes('x')) multiply()
    if (input.includes('÷')) devide()}
    input += " + "
    let plus = document.createElement("p")
    plus.textContent = input
    display.appendChild(plus)
}

function clickMinus() {
    display.innerHTML = ' '
    if (input.length > 2) {input = input.split(" ")
    console.log(input)
    
    if (input.includes('+')) add()
    if (input.includes('-')) subtract()
    if (input.includes('x')) multiply()
    if (input.includes('÷')) devide()}
    input += " - "
    let minus = document.createElement("p")
    minus.textContent = input
    display.appendChild(minus)
}

function clickTimes() {
    display.innerHTML = ' '
    if (input.length > 2) {input = input.split(" ")
    console.log(input)
    
    if (input.includes('+')) add()
    if (input.includes('-')) subtract()
    if (input.includes('x')) multiply()
    if (input.includes('÷')) devide()}
    input += " x "
    let times = document.createElement("p")
    times.textContent = input
    display.appendChild(times)
}

function clickDivide() {
    display.innerHTML = ' '
    if (input.length > 2) {input = input.split(" ")
    console.log(input)
    
    if (input.includes('+')) add()
    if (input.includes('-')) subtract()
    if (input.includes('x')) multiply()
    if (input.includes('÷')) devide()}

    input += " ÷ "
    let divide = document.createElement("p")
    divide.textContent = input
    display.appendChild(divide)
}

    // special buttons

function clickClear() {
    display.innerHTML = ' '
    return input = ""
}

function clickEqual() {
    input = input.split(" ")
    console.log(input)
    
    if (input.includes('+')) add()
    if (input.includes('-')) subtract()
    if (input.includes('x')) multiply()
    if (input.includes('÷')) devide()
}


// event listeners 
    // digits
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

    //operators
plus.addEventListener('click', clickPlus)
minus.addEventListener('click', clickMinus)
times.addEventListener('click', clickTimes)
divide.addEventListener('click', clickDivide)

    //special buttons

clear.addEventListener('click', clickClear)
equal.addEventListener('click', clickEqual)



// operation functions
function add() {
    input.splice(1, input.indexOf('+'))
    console.log(input)
    input = input.map(item => Number(item))
    console.log(input)

    result = input.reduce((sum, curr) => {
        return sum + curr
    }, 0)
    // result
     let resultDisplay = document.createElement("p")
    resultDisplay.textContent = result
    display.appendChild(resultDisplay) 
    // result/
    input = ""
    input += result
    console.log(input)
}

function subtract() {
    input.splice(1, input.indexOf('-'))
    console.log(input)
    input = input.map(item => Number(item))
    console.log(input)

    result = input.reduce((sum, curr) => {
        return sum - curr
    })
    // result
    let resultDisplay = document.createElement("p")
    resultDisplay.textContent = result
    display.appendChild(resultDisplay) 
    // result/
    input = ""
    input += result
    console.log(input)
}

function multiply() {
    input.splice(1, input.indexOf('x'))
    console.log(input)
    input = input.map(item => Number(item))
    console.log(input)

    result = input.reduce((sum, curr) => {
        return sum * curr
    }, 1)
    // result
    let resultDisplay = document.createElement("p")
    resultDisplay.textContent = result
    display.appendChild(resultDisplay) 
    // result/
   input = ""
    input += result
    console.log(input)
    
}

function devide() {
     input.splice(1, input.indexOf('÷'))
    console.log(input)
    input = input.map(item => Number(item))
    console.log(input)

   

if (input.slice(1).includes(0)) {
    display.textContent = "error";
    input = "";
    return;
}

    result = input.reduce((sum, curr) => {
        return sum / curr
    })
    result = Math.round(result * 10) / 10

    
    // result
    let resultDisplay = document.createElement("p")
    resultDisplay.textContent = result
    display.appendChild(resultDisplay) 
    // result/
    input = ""
    input += result
    console.log(input)
}

