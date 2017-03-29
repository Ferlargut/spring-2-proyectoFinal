
function Lista(titulo) {
    this.titulo=titulo; 
    this.pendiente="";   
   
}
 var listas=[];
function crearLista() {
    var lugar=document.getElementById("listas");
    var titulo=document.createElement("h2");
    var boton=document.createElement("button");
    var inputLista=document.createElement("input");
    var lista=document.createElement("ul")
    var elemento=new Lista(document.getElementById("listaNew").value);
    listas.push(elemento);
    lista.id="ponerListas";
    inputLista.id="obtenerComentarios";      
    lugar.appendChild(titulo);
    lugar.appendChild(lista);
    lugar.appendChild(inputLista);
    lugar.appendChild(boton);
    boton.id="boton";
    titulo.innerHTML=elemento.titulo;
    boton.innerText=boton.name="Pendientes";
    boton=document.getElementById("boton");
    boton.setAttribute("onClick", "crearPendientes();");



    
}

function crearPendientes() {
    var lugar = document.getElementById("ponerListas");
    var pendiente=document.getElementById("obtenerComentarios").value;
    var crearPend=document.createElement("li");
    var posicion=document.getElementById("espacio");
    crearPend.id="espacio";   
    
    crearPend.id="pendienteDinamico";
    lugar.appendChild(crearPend);
    crearPend.innerText=pendiente;
    


    
}