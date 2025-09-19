//ejercico A 

const persona =  
{ 
    nombre : "Selene Lira",
    edad: 19,
    direccion:  
    { 
        ciudad: "Qro",
        Pais:"MX"
    } 

};

const  {nombre, edad, direccion: {ciudad} } = persona;

console.log("Me llamo" + nombre + ", tengo " + edad + "años y vivo en " + ciudad);
