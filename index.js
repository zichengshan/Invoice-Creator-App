let money = 0, task = [], taskMoney = []
const resetBtnEl = document.getElementById("reset-btn")
const addBtnEl = document.getElementById("add-btn")
const inputsNameEl = document.getElementById("inputs-name")
const inputsMoneyEl = document.getElementById("inputs-money")
const taskEl = document.getElementById("task")
const totalAmountEl = document.getElementById("total-amount")

let moneyStorage = JSON.parse(localStorage.getItem("money"))
let taskStorage = JSON.parse(localStorage.getItem("task"))
let taskMoneyStorage = JSON.parse(localStorage.getItem("taskMoney"))

if(taskStorage){
    money = moneyStorage
    task = taskStorage
    taskMoney = taskMoneyStorage
    render(money, task, taskMoney)
}

addBtnEl.addEventListener("click", function () {
    if(parseInt(inputsMoneyEl.value)){
        money += parseInt(inputsMoneyEl.value)
        task.push(inputsNameEl.value)
        taskMoney.push(inputsMoneyEl.value)

        saveInLocalStorage()
        render(money, task, taskMoney)
    }else {
        alert("Invalid money input! Please enter a number!")
    }
})

function render(money, task, taskMoney) {
    let innerHtml = ""
    for(let i = 0; i < taskMoney.length; i++){
        innerHtml += `
            <div class="subTitle">
                    <p class="task-name"> ${task[i]} </p>
                    <button id="remove-btn" onclick="remove(${i})">Remove</button>
                    <p class="task-money"> $ ${taskMoney[i]}</p>
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

    saveInLocalStorage()
    render(money, task, taskMoney)
}


resetBtnEl.addEventListener("click", function () {
    money = 0, task = [], taskMoney = []
    localStorage.clear()
    render(money, task, taskMoney)
})

function saveInLocalStorage() {
    localStorage.setItem("money", JSON.stringify(money))
    localStorage.setItem("task", JSON.stringify(task))
    localStorage.setItem("taskMoney", JSON.stringify(taskMoney))
}
