var notas;
var promedio;
var suma=0;

var nnotas= parseInt(prompt("digite la cantidad de notas a promediar"))

for (i=0; i < notas; i++){
    var notas = parseInt(prompt("digita la nota " + i));

    suma = suma + notas;
}

promedio = suma / nnotas

alert("el resultado es " + promedio)
