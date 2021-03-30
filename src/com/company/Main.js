

let a = document.querySelector("div")

let onClickFunc = function () {
    let newspan = document.createElement("span")
    newspan.innerText = "čus ty debílku";
    document.body.appendChild(newspan)
}

a.addEventListener("click", onClickFunc)