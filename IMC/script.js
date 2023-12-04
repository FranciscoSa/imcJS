function getImcResult() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    if (validadeInput(peso, altura)) {
        alert ("Insira valores validos para o calculo de IMC !");
    }else {
        calcImc(peso, altura);
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}

function validadeInput(peso, altura) {
    return (peso === null || peso === "" || altura === null || altura === "");
}

function calcImc(peso, altura) {
    let imc = Number(peso / (altura*altura)).toFixed(2);

    if (imc < 18.5){
        alert ("Seu IMC é " + imc + " você esta abaixo do peso ideal.");
    } else if (imc >= 18.5 && imc <= 24.99){
        alert ("Seu IMC é " + imc + " você esta no peso ideal.");
    } else if (imc >= 20 && imc <= 29.99){
        alert ("Seu IMC é " + imc + " você esta com sobrepeso.");
    } else {
        alert ("Seu IMC é " + imc + " você esta obeso.");
    }
}