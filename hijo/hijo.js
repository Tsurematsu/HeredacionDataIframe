let lista = document.getElementById('lista');
let plantilla = lista.children[0];

// evento para esperar a que el contenido del iframe cargue
window.addEventListener('message', (event) => {
    // el mensaje se recoge desde el ".data" del evento
    lista.innerHTML = '';

    event.data.forEach(element => {
        let nuevo = plantilla.cloneNode(true);
        nuevo.innerHTML = nuevo.innerHTML.replaceAll('$', element);
        lista.appendChild(nuevo);
    });
  });