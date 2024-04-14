let my_iframe = document.getElementById('myIframe');
let content = document.getElementById('content');
let input = content.children[0];
let button = content.children[1];
let data = [
    "papa",
    "yuca",
    "plátano",
]

// evento para esperar a que el contenido del iframe cargue
my_iframe.addEventListener('load', () => {
    //enviar data al iframe
    my_iframe.contentWindow.postMessage(data, '*');
});

// evento button para enviar data actualizada al iframe
button.addEventListener('click', () => {
    data.push(input.value);
    my_iframe.contentWindow.postMessage(data, '*');
});


// Path: iframe.js
function nop(params) {
    // es posible acceder al contenido del iframe
    // Nota: solo se puede acceder al contenido si el iframe pertenece al mismo dominio y si el iframe esta ya cargado
    console.log(my_iframe.contentWindow.document);
    let contenido = my_iframe.contentWindow.document.getElementById('elementoHijo');
    contenido.innerHTML += " Puto"
    console.log(contenido); 
}