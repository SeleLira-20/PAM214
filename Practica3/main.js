// ejercicio A, archivo main js 

import { restar } from "./utils.js";

console.log("probando la funcion restar");
console.log("10-5 =", restar(10, 5));
console.log("20-8 =", restar(20, 8));
console.log("7-3 =", restar(7, 3));
console.log("100-25 =", restar(100, 25));

// verrificar usuario

function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

verificarUsuario("admin")
  .then(res => console.log(res))   // Aparece: Acceso concedido
  .catch(err => console.error(err));

verificarUsuario("Ivan")
  .then(res => console.log(res))   //  Acceso denegado
  .catch(err => console.error(err));

