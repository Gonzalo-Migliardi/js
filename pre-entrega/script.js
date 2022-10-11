let cantidad_de_alumnos = parseInt(prompt("Cantidad de alumnos a promediar"));
let alumno;
let nota1;
let nota2;
let notas;

if(typeof (cantidad_de_alumnos) !== "number"){
    console.log("Pone un numero");
}
else {
    for (let i = 0 ; i < cantidad_de_alumnos; i++){
        alumno = prompt("Nombre del alumno");
        nota1 = obtenerNota(1);
       
        nota2 = obtenerNota(2);
       
        notas = promedio(nota1, nota2);
        
        if (aprobado(notas)){
            console.log("La nota de", alumno , "es", notas);
            console.log("Usted esta aprobado");
        }
    
        else{
            console.log("La nota de ", alumno , "es", notas);
            console.log("Usted esta desaprobado");
        }
    
    }
}


function obtenerNota(examenNum){
    let nota;
    nota = prompt("Ingrese nota " + examenNum);
        if(isNaN(nota)){
            while(isNaN(nota)){
                nota = prompt("Ingrese nota " + examenNum + " (Ingrese un numero)");
                if (isNaN(nota)){
                    nota = parseInt(nota);
                }
            }
        }
        else {
            nota = parseInt(nota);
        }
        
        return nota;
}

function promedio(nota1, nota2){
    let suma = 0;
    suma = parseInt(nota1) + parseInt(nota2);
    
        suma = suma / 2;
        
        return suma;
}

function aprobado(nota){
    if (nota >= 7){
        return true;
    }
    else {
        return false;
    }
}