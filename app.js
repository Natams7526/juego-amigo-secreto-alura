const amigos = [];
const mensaje = document.getElementById('resultado')

// Función encargada 
function agregarAmigo() {
     // Reiniciar el contenido del mensaje al inicio
     mensaje.innerHTML = '';
     //capturar el valor del input
    let nombreAmigo = document.getElementById('amigo').value;
    // invocar funcion encargada de validar el valor del input
    validarEntrada(nombreAmigo);
    // vaciar el input 
    document.getElementById('amigo').value = '';
    // invocar funcion para mostrar la lista en html
    actualizarLista();
}


// Función que valida que el input no este vacio y empujar al array el nombre 
function validarEntrada(nombre) {
    // Verificar si nombre es null, y quitamos los espacios en blanco con.trim  para verificar si es una cadena vacía
    if (!nombre || nombre.trim() === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombre);
    }
}

 // Función para recorrer el array amigos y mostrarlo en la lista HTML
 function actualizarLista() {
    const lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = '';    
    // Recorrer el array con un for y  Agregar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {        
        lista.innerHTML += `<li>${amigos[i]}</li>`; 
    }    
}

// Función para sortear un amigo
function sortearAmigo(){
    if (amigos.length === 0 ){
        mensaje.innerHTML = "No hay amigos en la lista.";
    }

    else {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Seleccionar un amigo al azar
        mensaje.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
}