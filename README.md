# Challenge-Amigo-secreto

¡Bienvenido a este challenge donde aprendi a manejar listas, eventos y lógica en JavaScript! 🚀  

## 📌 Descripción  

Este proyecto me permitio:  
1. **Agregar nombres** a una lista escribiéndolos en un campo de texto.  
2. **Ver los nombres ingresados** en pantalla.  
3. **Sortear un nombre aleatorio** de la lista como "Amigo Secreto".
4. **Crear alertas** frente a campos vacios  

## 🚀 Codificacion del challenge  

El archivo `app.js` contiene tres funciones principales:  

### 1️⃣ Agregar nombres a la lista  
```javascript
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo").value.trim();
    if (inputNombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    listaDeAmigos.push(inputNombre);
    mostrarLista();
}
```
- Toma el valor ingresado.  
- Si está vacío, muestra una alerta.  
- Si es válido, lo agrega a la lista.  

### 2️⃣ Mostrar la lista en pantalla  
```javascript
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}
```
- Limpia la lista antes de actualizarla.  
- Recorre los nombres y los agrega a la pantalla.  

### 3️⃣ Sortear un amigo  
```javascript
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>🎉 ${amigoSorteado} 🎉</li>`;
}
```
- Verifica si hay nombres en la lista.  
- Usa `Math.random()` para elegir uno al azar.  
- Muestra el resultado en pantalla.  

## 🎯 Objetivos de Aprendizaje  

✅ Entender el manejo de **eventos en JavaScript**.
✅ Usar **arrays** y **funciones** básicas.  
✅ Aplicar **validaciones** en formularios.  
