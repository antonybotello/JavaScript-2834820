
function sumar() {
    var n1=parseInt(document.querySelector("#numero1").value);
    var n2=parseInt(document.getElementById("numero2").value);
    document.querySelector("#resultado").innerHTML= n1+n2;
}
function restar() {
    var n1=parseInt(document.querySelector("#numero1").value);
    var n2=parseInt(document.querySelector("#numero2").value);
    document.querySelector("#resultado").innerHTML= n1-n2;
}
function multiplicar() {
    var n1=parseInt(document.querySelector("#numero1").value);
    var n2=parseInt(document.querySelector("#numero2").value);
    document.querySelector("#resultado").innerHTML= n1*n2;
}
function dividir() {
    var n1=parseInt(document.querySelector("#numero1").value);
    var n2=parseInt(document.querySelector("#numero2").value);
    document.querySelector("#resultado").innerHTML= n1/n2;
}
function borrar(){
    document.querySelector("#numero1").value="0";
    document.querySelector("#numero2").value="0";
    document.querySelector("#resultado").innerHTML="0";
}

function fiebre() {
    var temp=parseFloat(document.querySelector("#temperatura").value);
    if (temp>37.5) {
        document.querySelector("#resultadoFiebre").innerHTML="Tienes fiebre";
        document.querySelector("#resultadoFiebre").className="fiebre"
console.dir(document.getElementsByClassName("fiebre"));

    } else {
        document.querySelector("#resultadoFiebre").innerHTML="No tienes fiebre";
        document.querySelector("#resultadoFiebrec").className="no-fiebre"

    }
}
const logo= document.createElement("div");
logo.className="logo tam";
document.body.appendChild(logo);
console.dir(document.getElementsByClassName("fiebre"));
document.getElementById("duplicado").remove();
const miLogo=document.getElementById("miLogo");
miLogo.addEventListener("click",function(){
    alert("Has hecho click en el logo");
});
