
let money = 0
let task = []
let taskMoney = []
const resetBtnEl = document.getElementById("reset-btn")
const addBtnEl = document.getElementById("add-btn")
const inputsNameEl = document.getElementById("inputs-name")
const inputsMoneyEl = document.getElementById("inputs-money")
const taskEl = document.getElementById("task")
const totalAmountEl = document.getElementById("total-amount")

render()
addBtnEl.addEventListener("click", function () {
    money += parseInt(inputsMoneyEl.value)
    task.push(inputsNameEl.value)
    taskMoney.push(inputsMoneyEl.value)
    render()
})

function render() {
    let innerHtml = ""
    for(let i = 0; i < taskMoney.length; i++){
        innerHtml += `
        <div class="subTitle">
                <p class="task-name"> ${task[i]} </p>
                <button id="remove-btn" onclick="remove(${i})">Remove</button>
                <p class="task-money"> ${taskMoney[i]}</p>
        </div>
        `
    }
    taskEl.innerHTML = innerHtml
    totalAmountEl.innerHTML = "$" + money
    inputsNameEl.value = ""
    inputsMoneyEl.value = ""
}

function remove(index){
    money -= parseInt(taskMoney[index])
    task.splice(index, 1)
    taskMoney.splice(index,1)
    render()
}


resetBtnEl.addEventListener("click", function () {
    task = []
    taskMoney = []
    money = 0
    render()
})
