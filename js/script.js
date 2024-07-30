console.log("Hola Mundo!")
// alert("Hola Mundo!")

var numero1= parseInt(prompt("Ingresa un número"))
var numero2= parseInt(prompt("Ingresa otro número"))


var division= numero1 / numero2
var modulo= numero1 % numero2
var potencia= Math.pow(numero1, numero2)

var contador= 0

contador+=1

// console.log("la suma de los números es "+suma(numero1, numero2))
// console.log("la resta de los números es "+resta)
// console.log("la multiplicación de los números es "+multiplicacion)
// console.log("la división de los números es "+division)
// console.log("el módulo de los números es "+modulo)
// console.log("la potencia de los números es "+potencia)
// console.log(typeof(suma))
// var res= suma==9
// console.log("el numero1 es igual a 4 "+res)  

function suma(numero1, numero2){
    return numero1+numero2
}
function resta(numero1, numero2){
    return numero1-numero2
}
function multiplicacion(numero1){
    for (var i=1; i<=10; i++){
        console.log(numero1+" * "+i+" = "+numero1*i)
    }
}
var menu= 9
while (menu!=0) {
    var menu= prompt("Elige una opción:\n 1. Suma\n 2. Resta\n 3. Tabla Multiplicación\n 4. División\n 5. Módulo\n 6. Potencia\n 0. Salir\n")
    if (menu==1) {
        console.log("la suma de los números es "+suma(numero1, numero2))
    } else if (menu==2) {
        console.log("la resta de los números es "+resta(numero1, numero2))
    } else if (menu==3) {
        console.log("la tabla de multiplicación de los número "+numero1+" es\n ")
        multiplicacion(numero1)
    } else if (menu==4) {
        console.log("la división de los números es "+division)
    } else if (menu==5) {
        console.log("el módulo de los números es "+modulo)
    } else if (menu==6) {
        console.log("la potencia de los números es "+potencia)
    } else if (menu==0) {
        console.log("Adiós")
    } else {
        console.log("Opción no válida")
    }
}