var btnNumeros = document.getElementsByName("btnNumero");
var pantallaPrincipal = document.getElementById("PantPrincipal");
var SignoOpr = document.getElementById("SignoOpr");
var btnIgual = document.getElementById("btnIgual");

//historial
var oprHist = document.getElementById("OprHistorial");
var NumAHistorial = document.getElementById("NumAHistorial");
var NumBHistorial = document.getElementById("NumBHistorial");

//variables
var valorA = 0;
var valorB = 0;
var resultado = 0;


//bucle for que recorre los botones
for (let i = 0; i < btnNumeros.length; i++) {
    btnNumeros[i].addEventListener("click",function(){
        pantallaPrincipal.value = pantallaPrincipal.value + btnNumeros[i].value;
    });
    
}

//validaciones
function validacion(){
    if(pantallaPrincipal.value == "")
    {
        pantallaPrincipal.focus();
    }
    else if(NumAHistorial.innerHTML != "" && oprHist.innerHTML != "" && NumBHistorial.innerHTML == "")
    {
        btnIgual.focus();
    }
    else
    {
        valorA = pantallaPrincipal.value;
        NumAHistorial.innerHTML = valorA;
        NumBHistorial.innerHTML = "";
        pantallaPrincipal.value = "";
    }
}
//operaciones
function suma(){
    oprHist.innerHTML= "+";
    SignoOpr.innerHTML = "+";
    validacion();
}
function resta(){
    oprHist.innerHTML= "-";
    SignoOpr.innerHTML = "-";
    validacion();
}
function multiplicacion(){
    oprHist.innerHTML= "x";
    SignoOpr.innerHTML = "x";
    validacion();
}
function division(){
    oprHist.innerHTML= "/";
    SignoOpr.innerHTML = "/";
    validacion();
}

//funciones
function operaciones(){
    valorB = pantallaPrincipal.value;
    NumBHistorial.innerHTML = valorB;

    switch (SignoOpr.innerHTML) {
        case "+":
            resultado = parseFloat(valorA) + parseFloat(valorB);
            break;
        case "-":
            resultado = parseFloat(valorA) - parseFloat(valorB);
            break;
        case "x":
            resultado = parseFloat(valorA) * parseFloat(valorB);
            break;
        case "/":
            resultado = parseFloat(valorA) / parseFloat(valorB);
            break;    
    }
    SignoOpr.innerHTML = "=";
    pantallaPrincipal.value = resultado;
}

function resultadofinal(){
    if (pantallaPrincipal.value != "" && SignoOpr.innerHTML != "" && SignoOpr.innerHTML != "=") {
        operaciones()
    }else{
        pantallaPrincipal.focus();
    }
    
}

function reiniciarCal(){
    valorA = 0;
    valorB = 0;
    resultado = 0;
    pantallaPrincipal.value = "";
    SignoOpr.innerHTML = "";
    oprHist.innerHTML = "";
    NumAHistorial.innerHTML ="";
    NumBHistorial.innerHTML ="";

}
