function calcular() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var operador = document.getElementById("operador").value;
    var resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: Divisão por zero";
            }
            break;
        default:
            resultado = "Operador inválido";
            break;
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
    console.log("Resultado: " + resultado);
}