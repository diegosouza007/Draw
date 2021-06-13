let maxValue = document.getElementById('draw');
let result = document.getElementById('result');

document.getElementById('draw-btn').addEventListener('click', getNumber);

function getNumber() {
    if (maxValue.value != 0) {
        let number = Math.round(Math.random() * maxValue.value);
        result.innerHTML = number;
    } else if (maxValue.value == '') {
        console.log(maxValue.value);
        result.innerHTML = "Insira um número.";
    } else {
        result.innerHTML = "Digite um valor maior que 0.";
    }
}