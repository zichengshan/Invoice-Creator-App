
localStorage.setItem("money", "0")
localStorage.setItem("task", "[]")
localStorage.setItem("taskMoney","[]")
const resetBtnEl = document.getElementById("reset-btn")
const addBtnEl = document.getElementById("add-btn")
const inputsNameEl = document.getElementById("inputs-name")
const inputsMoneyEl = document.getElementById("inputs-money")
const taskEl = document.getElementById("task")
const totalAmountEl = document.getElementById("total-amount")

render()
addBtnEl.addEventListener("click", function () {
    if(parseInt(inputsMoneyEl.value)){
        let money = parseInt(localStorage.getItem("money")) + parseInt(inputsMoneyEl.value)
        let task = JSON.parse(localStorage.getItem("task"))
        let taskMoney = JSON.parse(localStorage.getItem("taskMoney"))

        localStorage.setItem("money", JSON.stringify(money))
        task.push(inputsNameEl.value)
        taskMoney.push(inputsMoneyEl.value)
        localStorage.setItem("task", JSON.stringify(task))
        localStorage.setItem("taskMoney", JSON.stringify(taskMoney))
        render()
    }else {
        alert("Invalid money input! Please enter a number!")
    }
})

function render() {
    let task = JSON.parse(localStorage.getItem("task"))
    let taskMoney = JSON.parse(localStorage.getItem("taskMoney"))
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
    totalAmountEl.innerHTML = "$" + localStorage.getItem("money")
    inputsNameEl.value = ""
    inputsMoneyEl.value = ""
}

function remove(index){
    let task = JSON.parse(localStorage.getItem("task"))
    let taskMoney = JSON.parse(localStorage.getItem("taskMoney"))
    let money = parseInt(localStorage.getItem("money")) - parseInt(taskMoney[index])
    localStorage.setItem("money", JSON.stringify(money))

    task.splice(index, 1)
    taskMoney.splice(index,1)
    localStorage.setItem("task", JSON.stringify(task))
    localStorage.setItem("taskMoney", JSON.stringify(taskMoney))
    render()
}


resetBtnEl.addEventListener("click", function () {
    localStorage.setItem("money", "0")
    localStorage.setItem("task", "[]")
    localStorage.setItem("taskMoney","[]")
    render()
})
