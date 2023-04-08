function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}



function evaluarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso saludable";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

function calcularIMCConMensaje(peso, altura) {
    let imc = calcularIMC(peso, altura);
    let mensaje = "Tu IMC es " + imc.toFixed(2) + ", lo que indica que tienes  " + evaluarIMC(imc);
    return mensaje;
}

let continuar = true;

while (continuar) {
    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    let altura = parseFloat(prompt("Ingresa tu altura en metros:"));

    let mensaje = calcularIMCConMensaje(peso, altura);
    alert(mensaje);

    continuar = confirm("¿Deseas calcular tu IMC de nuevo?");
}