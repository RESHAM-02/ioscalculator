
let exp = "0" ;

const calculations = document.getElementById('calculations');

function display(value) {
    exp = exp === "0" ? value : exp + value;
    calculations.innerText = exp;
    console.log(exp)
}

function evaluation() {
    const result = eval(exp);
    calculations.innerText = result;
    exp = "0";
}

function reset() {
    exp = "0";
    calculations.innerText = exp;
}

function removeLast() {
      exp = exp.slice(0, -1) || "0"
      calculations.innerText = exp;
}