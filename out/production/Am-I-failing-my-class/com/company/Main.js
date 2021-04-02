let onloadFunc = function () {
    let count = 0;
    let gradesDiv = document.getElementById("gradesId")
    let a = document.getElementById("add")

    a.addEventListener("click", add);

    let inputFun = function () {
        let div = document.createElement('div')
        div.classList.add('input')
        div.className = "divNaZnamky"

        let input1 = document.createElement("input")
        let input2 = document.createElement("input")

        let label1 = document.createElement("label")

        input1.className = "input1";
        input2.className = "input2";

        input1.placeholder = "Grade";
        input2.placeholder = "Weight";

        input1.id = 'grade' + count;
        input2.id = 'weight' + count;

        label1.className = "label1";

        label1.innerText = "Grade " + count + "#";

        div.appendChild(label1)
        div.appendChild(input1)
        div.appendChild(input2)

        gradesDiv.appendChild(div)
    }
}
    let add = function () {
        count++;
        inputFun();
    }
    let calculateFun = function () {

        let prumer = 0;
        let vahy = 0;

        for (let i = 0; i < count; i++) {
            let grade = document.getElementById("grade" + i).valueOf();
            let weight2 = document.getElementById('weight' + i).valueOf();

            let x = parseInt(grade.value())
            let p = parseInt(weightInt.value())


        }
    }
window.onload = onloadFunc;
