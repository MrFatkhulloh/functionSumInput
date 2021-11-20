var inputData = [];


function calculation() {
    var calculation = 0;
    for (const aNumber of inputData) {
        oneNumber = Number(aNumber);
        calculation += oneNumber;
    }
    console.log(calculation);
    var elHeading = document.querySelector("#heading")
    elHeading.textContent = `The calculation is ${calculation}`
}

function sumInput() {
    var promptInput = prompt(`Number please`);
    if (!isNaN(promptInput) && promptInput != null && promptInput.trim() != "") {
        inputData.push(promptInput);
        sumInput();
    }else {
        calculation();
    }
    return `we calculated only numbers!`
}

console.log(sumInput())