
let money = 0
let task = []
let taskMoney = []
const resetBtnEl = document.getElementById("reset-btn")
const addBtnEl = document.getElementById("add-btn")
const inputsNameEl = document.getElementById("inputs-name")
const inputsMoneyEl = document.getElementById("inputs-money")
const taskEl = document.getElementById("task")


render()
addBtnEl.addEventListener("click", function () {
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
                
                <p class="task-money"> ${taskMoney[i]}</p>
        </div>
        `
    }
    taskEl.innerHTML = innerHtml
    inputsNameEl.value = ""
    inputsMoneyEl.value = ""
}


resetBtnEl.addEventListener("click", function () {
    task = []
    taskMoney = []
    render()
})
