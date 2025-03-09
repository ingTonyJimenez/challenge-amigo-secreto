// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let inputAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let addButton = document.querySelector(".button-add");
let ulResultado = document.querySelector("#resultado");




function agregarAmigo(){

if(inputAmigo.value == ""){
    alert("Por favor, inserte un nombre.");
}

else{let nuevoAmigo = amigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML  += `<li>${inputAmigo.value}</li>`;
limpiarInput();
}
        
};

function limpiarInput(){
    inputAmigo.value = "";
}

function sortearAmigo(){

    if(amigos.length>0){
        let random = Math.floor((Math.random() * amigos.length));
        let amigoSecreto = amigos[random];
        ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;
    }

    else{
        alert("Por favor ingresa al menos 1 nombre");
    }

  
}


