// Declarar una variable
let valor = "LocalStorage JavaScritpt";

// Almacenar la variable valor del DOM en el local storage
// El parámetro registro es la key y el parámetro valor es tal cual lo que se almacenará 
localStorage.setItem("Registro", valor);

let mensaje = document.getElementById('mensaje');

// Mostrar en la etiqueta h1 el valor que se registro con la key Registro
mensaje.innerHTML = localStorage.getItem("Registro");

let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let checkbox = document.getElementById('checkBox');
let button = document.getElementById('button');
let recuperar = document.getElementById('recuperar');
let mostrarRegistros = document.getElementById('mostrarRegistros');

let registros = [];

// Crear un nuevo evento cuando se presione el botón
button.addEventListener('click', function(e){
    // Cuando se oprima el botón no se recargará la página
    e.preventDefault();
    // Almancenar en local lo insertado en el formulario
    // localStorage.setItem("Correo electrónico", email.value);
    // localStorage.setItem("Contraseña", password.value);
    // localStorage.setItem("Checkbox", checkbox.value);

    // Se hace lo siguiente porque en producción real no se declaran n cantidad de variables
    // Registro dentro de un arreglo, por eso las llaves
    let elemento = {
        email: email.value,
        password: password.value,
        checkbox: checkbox.value
    };

    registros.push(elemento);

    // Con JSON.stringify el objeto registro se convierte a formato JSON
    localStorage.setItem("Registros", JSON.stringify(registros));
    console.log(registros);
});

recuperar.addEventListener('click', function(){
    // Recuperar lo que esta en la memoria por medio de la key
    // Convertir de formato JSON a array
    registros = JSON.parse(localStorage.getItem("Registros"));

    registros.forEach(function(elemento, indice) {
        console.log(indice + " " + elemento.email + ", " + elemento.password + ", " + elemento.checkbox);
        mostrarRegistros.innerHTML = mostrarRegistros.innerHTML + indice + " " + elemento.email + ", " + elemento.password + ", " + elemento.checkbox + " ";
    });
});