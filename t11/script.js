const result = document.getElementById('result');

function getFirstNum() {
    return parseFloat(document.getElementById('num1').value);
}

function getSecondNum() {
    return parseFloat(document.getElementById('num2').value);
}

function addNumbers() {
    const n1 = getFirstNum()
    const n2 = getSecondNum();
    let sum = n1 + n2;

    result.textContent = "Result: " + sum;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);

function subtractNumbers() {
    const n1 = getFirstNum()
    const n2 = getSecondNum();
    const res = n1 - n2;
    result.textContent = `Result: ${res}`;
}

function multiplyNumbers() {
    const n1 = getFirstNum()
    const n2 = getSecondNum();
    const res = n1 * n2;
    result.textContent = `Result: ${res}`;
}

function divideNumbers() {
    const n1 = getFirstNum()
    const n2 = getSecondNum();
    const res = n1 / n2;
    result.textContent = `Result: ${res}`;
}

document.getElementById('subBtn').addEventListener('click', subtractNumbers);
document.getElementById('mulBtn').addEventListener('click', multiplyNumbers);
document.getElementById('divBtn').addEventListener('click', divideNumbers);
