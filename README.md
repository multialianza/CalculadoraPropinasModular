# CalculadoraPropinasModular
🛠️ E3-M3 Ejercicio
Calculadora de Propinas Modular 🧮
Objetivo:
Desarrollar una calculadora que determine el monto de una propina y el total a pagar, encapsulando la lógica principal de cálculo dentro de una función reutilizable.

Instrucciones:
1.	Creación de la Función de Cálculo:
o	Define una función llamada calcularPropina que acepte dos parámetros: el monto total de la cuenta y el porcentaje de propina que se desea dejar.
o	Dentro de la función, realiza el cálculo para obtener el monto de la propina (monto * (porcentaje / 100)).
o	La función debe retornar (return) únicamente el valor calculado de la propina.

2.	Captura de Datos del Usuario:
o	Fuera de la función, utiliza prompt() para solicitar al usuario el monto de la cuenta y, luego, el porcentaje de propina.
o	Es crucial convertir los valores ingresados por el usuario (que son strings) a números. Usa parseFloat() para asegurar que los cálculos matemáticos se realicen correctamente. Almacena estos valores en variables.

3.	Invocación y Almacenamiento:
o	Llama (invoca) a tu función calcularPropina, pasándole como argumentos las dos variables numéricas que obtuviste del usuario.
o	Guarda el resultado que la función retorna en una nueva variable (por ejemplo, montoPropina).


4.	Presentación de Resultados:
o	Calcula el monto total a pagar (monto de la cuenta + monto de la propina).
o	Muestra en la consola un resumen claro con el monto original, el monto de la propina y el total a pagar.

Ejemplo de Salida en Consola:
--- Resumen de la Cuenta ---
Monto de la cuenta: $1500
Propina (15%): $225
Total a pagar: $1725

Conceptos a Aplicar:
•	Declaración de Funciones: Sintaxis y definición de una función (function nombre(parametros) { ... }).
•	Parámetros y Argumentos: La diferencia entre las variables que una función espera y los valores que realmente recibe.
•	Retorno de Valores: Uso de la palabra clave return para devolver un resultado.
•	Scope (Ámbito): Entender cómo las variables definidas dentro y fuera de la función interactúan.
•	Entrada de Datos: prompt().
•	Conversión de Tipos: parseFloat() para convertir strings a números con decimales.
