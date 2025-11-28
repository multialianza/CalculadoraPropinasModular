// ======================================================================================
// Desarrollar una calculadora que determine el monto de una propina y el total a pagar =
// ======================================================================================


// Función para calcular propina
function calcularPropina(montoCuenta, porcentajePropina) {
    const propina = montoCuenta * (porcentajePropina / 100);
    return propina; // retorna solo el valor calculado
}


// Captura de datos con prompt()
let montoIngresado = prompt("Ingrese el monto total de la cuenta:");
let porcentajeIngresado = prompt("Ingrese el porcentaje de propina que desea dejar (Ingrese signo de %):");

// Convertimos string → número con parseFloat()
let montoCuenta = parseFloat(montoIngresado);
let porcentajePropina = parseFloat(porcentajeIngresado);


// Invocación de la función
let montoPropina = calcularPropina(montoCuenta, porcentajePropina);


// Cálculo del total y salida en consola

let totalPagar = montoCuenta + montoPropina;


console.log("\n" + "=".repeat(35));
console.log("--- Resumen de la Cuenta ---");
console.log("=".repeat(35));
console.log(`Monto de la cuenta: $${montoCuenta}`);
console.log(`Propina (${porcentajePropina}%): $${montoPropina}`);
console.log(`Total a pagar: $${totalPagar}`);
console.log("=".repeat(35) + "\n");