// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let inputAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let addButton = document.querySelector(".button-add");
let ulResultado = document.querySelector("#resultado");




function agregarAmigo(){
        let nuevoAmigo = amigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML  += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
    let random = Math.floor((Math.random() * amigos.length));
    let amigoSecreto = amigos[random];
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;
  
}


