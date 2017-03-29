var listas={};
function Lista(titulo) {
    this.titulo=titulo; 
    this.lista="";   
   
}

function crearLista() {
    var lugar=document.getElementById("listas");
    var titulo=document.createElement("h2");
    var boton=document.createElement("button");
    var inputLista=document.createElement("input");
    var lista=document.createElement("ul")
    var elemento=new Lista(document.getElementById("listaNew").value);

    lista.id="ponerListas";
    inputLista.id="obtenerComentarios"
   
    lugar.appendChild(titulo);
    lugar.appendChild(lista);
    lugar.appendChild(inputLista);
    lugar.appendChild(boton);
    titulo.innerHTML=elemento.titulo;
    


    
}