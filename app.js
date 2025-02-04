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

    // Agregar el nombre al array
    listaDeAmigos.push(nombre);
    console.log("Lista actualizada:", listaDeAmigos); // Ver la lista en la consola

    // Limpiar el campo de entrada
    inputNombre.value = "";
    // Actualizar la visualización de la lista
    mostrarLista();

}

// Paso 3: Función para mostrar los nombres en la lista

function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpiar la lista antes de actualizarla

    // Recorrer el array y crear un elemento <li> para cada nombre
    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });

    console.log("Lista mostrada en pantalla"); // Confirmar en la consola
}

// Paso 4: Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya al menos un nombre en la lista
    if (listaDeAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Elegir un nombre al azar
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    console.log("Nombre sorteado:", amigoSorteado); // Ver en la consola quién fue elegido

    // Mostrar el resultado en la página
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}