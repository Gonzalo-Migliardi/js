let alumno;
let nota1;
let nota2;
let suma;
let notas;

for (let i = 0 ; i < 1 ; i++){
    alumno = prompt("Nombre del alumno");
    nota1 = parseInt(prompt("Ingrese nota 1"));
    nota2 = parseInt(prompt("Ingrese nota 2"));

    suma = nota1 + nota2

    notas = suma / 2

    if (notas >= 7){
        console.log("La nota de", alumno , "es", notas);
        console.log("Usted esta aprobado");
    }

    else{
        console.log("La nota de ", alumno , "es", notas);
        console.log("Usted esta desaprobado");
    }

}