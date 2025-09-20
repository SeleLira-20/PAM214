// Ejercicio B 
const productos = 
[  
   { nombre: "Laptop", precio: 12000 },
   { nombre: "Mouse", precio: 250},
   { nombre: "Teclado", precio: 750},
   { nombre: "Monitor", precio: 3000}
];

const filtrar = productos.filter(producto => ptoducto.precio > 1000);

const articulo = filtrar.map(producto => producto.nombre);

console.log(articulo);