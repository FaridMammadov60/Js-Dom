//TASK 1
let btn = document.getElementById("join");
let firstList = document.getElementById("first-list");
let secondList = document.getElementById("second-list");
let threeDiv = document.getElementById("threeDiv");
let firstListArr = firstList.innerText.split("\n");
let secondtListArr = secondList.innerText.split("\n");
let newArr = [...firstListArr, ...secondtListArr];
let arrList = [...new Set(newArr)];

btn.onclick = function () {
    let NewList = document.createElement("ul");
    threeDiv.innerText = "List 3";
    threeDiv.append(NewList);
    for (let i = 0; i < arrList.length; i++) {
        let newLi = document.createElement("li");
        NewList.append(newLi);
        NewList.classList.add("list-group");
        newLi.classList.add("list-group-item");
        newLi.append(arrList[i]);
    }
}

//TASK2

let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let multiplyBtn = document.getElementById("multiply")
let divideBtn = document.getElementById("divide")

let firstInput = document.getElementById("first-input")
let secondInput = document.getElementById("second-input")
let resultInput = document.getElementById("result-input")


plusBtn.onclick = function () {
    resultInput.value = parseInt(firstInput.value) + parseInt(secondInput.value);
}

minusBtn.onclick = function () {
    resultInput.value = firstInput.value - secondInput.value;
}

multiplyBtn.onclick = function () {
    resultInput.value = firstInput.value * secondInput.value;
}

divideBtn.onclick = function () {
    resultInput.value = firstInput.value / secondInput.value;
}