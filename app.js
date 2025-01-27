let amigos = [];

// funcion encargada 
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    // invocar funcion encargada de validar la entrada 
    validarEntrada(nombreAmigo);
    // vaciar el input 
    document.getElementById('amigo').value = '';
    actualizarLista();
    console.log(nombreAmigo);
    console.log(amigos);

}


// funcion que valida que el input no este vacio y empujar al array el nombre 
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