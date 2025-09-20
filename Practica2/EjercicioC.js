// Ejercicio C 

const personas = 
[
    { nombre: "Ana", edad: 22},
    { nombre: "Luis", edad: 35},
    { nombre: "María", edad: 28}
];

const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", personaLuis);

personas.forEach(persona => 
    {
        console.log("Nombre: " + persona.nombre + "tiene: " + persona.edad);
    });

    const totalEdades = personas.reduce((acumulador, persona) => 
        {
            return acumulador + persona.edad;
        }, 0);

        console.log("Suma total de edades:", totalEdades);