let cantidad_de_alumnos = parseInt(prompt("Cantidad de alumnos a promediar"));
let alumnos = [];
let alumno;
let notas = [];

if(typeof (cantidad_de_alumnos) !== "number"){
    console.log("Pone un numero");
}
else {
    for (let i = 0 ; i < cantidad_de_alumnos; i++){
        alumno = prompt("Nombre del alumno");
        alumnos.push(alumno)

        notas.push(obtenerNota(1));
        notas.push(obtenerNota(2));
       
        let notaFinal = promedio(notas);
        
        if (aprobado(notas)){
            console.log("La nota de", alumnos[i] , "es", notaFinal);
            console.log("Usted esta aprobado");
        }
    
        else{
            console.log("La nota de ", alumnos[i] , "es", notaFinal);
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

function promedio(notas){
    let suma = 0;
    for (let i = 0; i < notas.length; i++){
        suma = suma + parseInt(notas[i]);
    }
    
    suma = suma / notas.length;
        
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