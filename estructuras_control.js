// ACTIVIDAD 2: GUIA ESTRUCTURAS DE CONTROL JAVASCRIPT

// EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
let usuarios = [
    { nombre: "Fernanda", edad: 23 },
    { nombre: "Nashua", edad: 27 },
    { nombre: "Johana", edad: 16 },
    { nombre: "Julien", edad: 17 }]

function verEdad(edad) {
    // Operador ternario (que quede en una sola línea)
    return edad >= 18 ? "Usuario de mayor edad" : "Usuario de menor edad";

    /* ----Es lo mismo que escribir:
        if (edad >= 18) {
            return "Usuario de mayor edad";
        } else {
            return "Usuario de menor edad";
        }
    */
}

usuarios.forEach((persona) => { // Recorrer cada elemento del array usuarios
    console.log(persona.nombre + ": " + verEdad(persona.edad));
})

// EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: Examen =20%, tareas = 40%, asistencia = 10%, investigación = 30%. Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

let alumnos = [
    { nombre: "Elisse", carnet: "es1234", examen: 9, tareas: 8, asistencia: 10, investigation: 8 },
    { nombre: "Arthur", carnet: "ar4589", examen: 10, tareas: 7, asistencia: 9, investigation: 8 },
    { nombre: "Regis", carnet: "rg8526", examen: 7, tareas: 8, asistencia: 6, investigation: 7 },
    { nombre: "Evie", carnet: "ev3457", examen: 8, tareas: 9, asistencia: 7, investigation: 9 }]

function notaFinal(examen, tareas, asistencia, investigation) {
    let promedio = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigation * 0.3);
    return promedio;
}

alumnos.forEach((datos) => { //datos es el objeto actual
    // Imprimiendo la función (notaFinal) con sus respectivos parámetros (examen,tareas,asistencia,investigation) por medio del objeto creado (datos) 
    console.log("Alumno: " + datos.nombre + " Carnet: " + datos.carnet + " Promedio: " + notaFinal(datos.examen, datos.tareas, datos.asistencia, datos.investigation).toFixed(2)); // toFixed es para que quede con 2 decimales
})

// EJERCICIO 3: Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial.


// EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.

let numero1 = 8;
let numero2 = 15;

function numMayor(valor1, valor2) {
    return valor1 > valor2 ? valor1 : valor2;

    /* ----Es lo mismo que escribir:
        if (valor1 > valor2) {
            return valor1;
        } else {
            return valor2;
        }
    */
}

console.log("El número mayor es: " + numMayor(numero1,numero2));
