const arrayOfValues = [];
const arrayOfValues2 = [];
const inputNode = document.getElementById(`somevalue`);
const outputNode = document.getElementById(`outputRandom`);

const button = document.getElementById(`js-add`);
const deletButton = document.getElementsByClassName(`del`);

const degOfRotate = 360 / arrayOfValues2.length;

let wheel = document.getElementById(`wheel`);
let buttonSpin = document.getElementById(`spin`);
let number = Math.ceil(Math.random() * 1000);

buttonSpin.onclick = function() {
    wheel.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000)
}


button.addEventListener(`click`, function() {
    addNewValue();
})

let i = 0;

function addNewValue() {
    const value = inputNode.value;
    const newInput = document.createElement(`input`);
    const newDeletB = document.createElement(`button`);
    const newDiv = document.createElement(`div`);
    newDeletB.textContent = `Delete`;
    newDeletB.classList.add(`del`)
    const boxOfInputes = document.getElementById(`inputes`);
    

    if (value == ``) {
        return console.log(`No value`)
    } else {
        arrayOfValues.push(value);
        inputNode.value = ``; 
        console.log(arrayOfValues);
        newInput.type = `text`;
        newInput.value = arrayOfValues[0];
        arrayOfValues2.push(...arrayOfValues);
        boxOfInputes.appendChild(newDiv);
        newDiv.setAttribute(`id`, i)
        newDiv.appendChild(newInput);
        newDiv.appendChild(newDeletB);
        arrayOfValues.shift();
        console.log(arrayOfValues2);
        i += 1;
    }    
} 

deletButton.addEventListener(`click`, function() {
    deletButton.parentElement.classList.add(`none`);
})


function showRandomValue() {
    const random = Math.floor(Math.random() * arrayOfValues2.length);
    outputRandom.innerHTML = arrayOfValues2[random]
}
