// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. // Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1: Crear un array vacío para almacenar los nombres
let listaDeAmigos = [];

/// Paso 2: Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); // Eliminar espacios al inicio y final

    console.log("Intentando agregar:", nombre); // Verificar qué nombre se está intentando agregar

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
}