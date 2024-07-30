var frutas = ["manzana", "pera", "uva", "sandia"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[3]);
console.log(frutas.indexOf("pera"));

var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matriz);
console.log(matriz[1][1]);

var aprendices = [
                  ["Miguel", "miguel@gmail", 12, 12.89],
                  ["Juan", "juan@gmail", 13, 13.89],    
                  ["Pedro", "pedro@gmail", 14, 14.89],
                  ["Maria", "maria@gmail", 15, 15.89]
                ];

for (var i = 0; i < aprendices.length; i++) {
    console.log("Registro #"+(i+1));
    for (let j = 0; j < aprendices[i].length; j++) {
        console.log("       "+aprendices[i][j]);
        
    }
}