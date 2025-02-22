// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];  // almacena el nombre de los amigos

// Función para agregar un amigo a la lista

function agregarAmigo() {
    // Obtener el elemento del input de nombre
    let nombreInput = document.getElementById("amigo");

    // Obtener el valor ingresado en el input y eliminar espacios extra o aparentes duplicados
    let nombre = nombreInput.value.trim();

    // Verificar que el usuario ingresó un nombre válido
    if (nombre !== "") {
        // Agregar el nombre al array de amigos
        amigos.push(nombre);

        // Actualizar la lista en la interfaz
        actualizarLista();

        // Limpiar el campo de texto después de agregar el nombre
        nombreInput.value = "";
    } else {
        // Mostrar una alerta si el input está vacío
        alert("Por favor, inserte un nombre.");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento donde se mostrará la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos usando un bucle for y agrega cada uno como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    }
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista antes de sortear
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear. Agrega al menos uno.");
        return; // Detiene la ejecución si la lista está vacía
    }

    // Generar un índice aleatorio dentro del rango del array amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

   // Actualiza el contenido del elemento de resultado para mostrar el amigo sorteado 
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;
}






