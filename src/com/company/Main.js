let count = 0;
let gradesDiv;
let a;
let propada;
let mean;
let buttCall;

let onloadFunc = function () {
    gradesDiv = document.getElementById("gradesId");
    a = document.getElementById("add")
    propada = document.getElementById("propadaId");
    mean = document.getElementById("meanId")
    buttCall = document.getElementById("calcutator")

    buttCall.addEventListener("click", calculateFun)
    a.addEventListener("click", add);

}

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
let add = function () {
    count++;
    inputFun();
}

let calculateFun = function () {
    let prumer = 0;
    let vahy = 0;
    let nasobeniXaP = 0;
    let scitaniNasobeni = 0;

    for (let i = 1; i < count; i++) {

        let grade = document.getElementById("grade" + i);
        let weight2 = document.getElementById('weight' + i);

        let x = parseInt(grade.value)
        let p = parseInt(weight2.value)

        nasobeniXaP = x * p;
        scitaniNasobeni += nasobeniXaP;
        vahy += p;
        prumer = scitaniNasobeni / vahy;
        isPropada(prumer)
    }
}

function isPropada(prumer) {
    if (prumer <= 40) {
        propada.innerText = "Am I failing my class?  Ano"
        mean.innerText = "Mean: " + prumer;
    } else {
        propada.innerText = "Am I failing my class?  nn"
        mean.innerText = "Mean: " + prumer;
    }
}

window.onload = onloadFunc;
