/*
const arrayOfValues = [];
const inputNode = document.getElementById(`somevalue`);
const outputNode = document.getElementById(`outputRandom`);
const newDiv = document.createElement(`div`);
const button = document.getElementById(`js-add`);*/


let wheel = document.getElementById(`wheel`);
let buttonSpin = document.getElementById(`spin`)
let number = Math.ceil(Math.random() * 1000);

buttonSpin.onclick = function() {
    wheel.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000)
}


function addY() {
    document.getElementById(`Yes`).innerHTML = document.getElementById(`afterYes`).value;
}

function addN() {
    document.getElementById(`No`).innerHTML = document.getElementById(`afterNo`).value;
}


function addOne() {
    document.getElementById(`One`).innerHTML = document.getElementById(`afterOne`).value;
}


function addTwo() {
    document.getElementById(`Two`).innerHTML = document.getElementById(`afterTwo`).value;
}


function addTh() {
    document.getElementById(`Three`).innerHTML = document.getElementById(`afterThree`).value;
}


function addFour() {
    document.getElementById(`Four`).innerHTML = document.getElementById(`afterFour`).value;
}


function addF() {
    document.getElementById(`Five`).innerHTML = document.getElementById(`afterFive`).value;
}


/*
button.addEventListener(`click`, function() {
    addNewValue();
    addNewElement();
})

function addNewValue() {
    const value = inputNode.value;
    if (value == ``) {
        return console.log(`No value`)
    } else {
        arrayOfValues.push(value);
        inputNode.value = ``; 
        console.log(arrayOfValues);
        newDiv.classList.add(`newdiv`);
        newDiv.innerHTML = `${inputNode}`;
        document.querySelector(`.form`).appendChild(newDiv);
    }
}

function addNewElement() {
    let wheel = document.getElementById(`wheel`);
    let newElementOfWheel = document.createElement(`li`);
    newElementOfWheel.innerHTML = arrayOfValues[inputNode.value];
    wheel.appendChild(newElementOfWheel);
}

function showRandomValue() {
    const random = Math.floor(Math.random() * arrayOfValues.length);
    outputRandom.innerHTML = arrayOfValues[random];
}*/
