let cantidad_de_alumnos = parseInt(prompt("Cantidad de alumnos a promediar"));
let nombreAlumno;

class Alumno{
    constructor(nombre){
        this.name = nombre;
        this.notas = [];
    }
    promedio(){
        let suma = 0;
        this.notas.forEach(nota => {
            suma = suma + parseInt(nota);
        });
        
        suma = suma / this.notas.length;
            
        return suma;
    }
}


if(typeof (cantidad_de_alumnos) !== "number"){
    console.log("Pone un numero");
}
else {
    for (let i = 0 ; i < cantidad_de_alumnos; i++){
        nombreAlumno = prompt("Nombre del alumno");
        let alumno = new Alumno(nombreAlumno);
        
        alumno.notas.push(obtenerNota(1));
        alumno.notas.push(obtenerNota(2));
       
       
        let notaFinal = alumno.promedio();
        
        if (aprobado(notaFinal)){
            console.log("La nota de", alumno.name , "es", notaFinal);
            console.log("Usted esta aprobado");
        }
    
        else{
            console.log("La nota de ", alumno.name , "es", notaFinal);
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



function aprobado(nota){
    if (nota >= 7){
        return true;
    }
    else {
        return false;
    }
}