function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")
    // não pode deixar console.log nos codigo
    // console.log (typeof numero1, typeof numero2)
    resp.textContent = numero1 + numero2
}

function multiplicacao(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp2 = document.getElementById("resposta2")
    resp2.textContent = numero3 * numero4
}

function subtracao(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resp3 = document.getElementById("resposta3")
    resp3.textContent = numero5 - numero6
}

function divisao(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var resp4 = document.getElementById("resposta4")
    resp4.textContent = numero7 / numero8
}