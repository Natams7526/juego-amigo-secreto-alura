let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    // invocar funcion encargada de validar la entrada 
    validarEntrada(nombreAmigo);
    // vaciar el input 
    document.getElementById('amigo').value = '';
    console.log(nombreAmigo);
    console.log(amigos);

}

function validarEntrada(nombre) {
    // Verificar si nombre es null, y quitamos los espacios en blanco con.trim  para verificar si es una cadena vacía
    if (!nombre || nombre.trim() === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombre);
    }
}
