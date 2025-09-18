// Ejercicio A: nombre y saludo 
    let nombre = "Armando";
    let edad = 25;
    nombre = "Ana Maria";
    const saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
    
    document.getElementById("mensaje").textContent = saludo;

    console.log(saludo);

// Ejercicio B: convertir una funcion tradicional a una arrow function

const cuadrado =  (numero) => numero * numero;

// Ejercicio C: Crea una arrow function llamada saludoPerzonalizado 

const saludoPerzonalizado = (nombre, edad) => 
    {
        return "Hola, me llamo " + nombre + "y tengo " + edad + "años.";

     };

     console.log(saludoPerzonalizado("Selene",19));