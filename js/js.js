 var listas=[];
function Lista(titulo,id) {
    this.id=id;
    this.titulo=titulo; 
    this.pendiente=[];   
    
}
function Pendientes(id,contenido){
        this.pendiente=id;
        this.contenido=contenido;
    }
function crearListas() {
    var titulo=document.getElementById("listaNew");
    var id = Date.now();
    var lista= new Lista(titulo.value,id);

    listas.push(lista);
    estructuraHtmlLista(lista);
        
}



function estructuraHtmlLista(lista) {
    var seccion=document.createElement("section");
    var titulo=document.createElement("h2");
    var boton=document.createElement("button");
    var inputLista=document.createElement("input");
    var estructuraDeUnaLista=document.createElement("ul");    
    var lugar=document.getElementById("listas");  

    lugar.appendChild(seccion);    
    seccion.appendChild(titulo);
    seccion.appendChild(estructuraDeUnaLista);
    estructuraDeUnaLista.appendChild(inputLista);
    estructuraDeUnaLista.appendChild(boton);
    titulo.innerHTML=lista.titulo;
    boton.innerText=boton.name="Pendientes";
    boton.setAttribute("data-list-id", lista.id);
    inputLista.id=lista.id;
    //seccion.id=listas.id;
    console.log(lista);
    //var elemento=new Lista(document.getElementById("listaNew").value);
    
    //lista.id="ponerListas";
    //inputLista.id="obtenerComentarios";  
    listas.forEach(function (lista) {
        lista.titulo
        
    })
    
    



    
}

function crearPendientes() {
    
    var id=date.now();
    var contenido="";
    var pendiente = new Pendientes(id,contenido);
}
/*

function crearPendientesHtml() {
    var ul=document.getElementsByTagName("ul");
    var indice =ul.length-1;
    var lugar=ul[indice];
    var li=document.getElementsByTagName("li");
    var posicion=li.length
    var pendiente=document.getElementById("obtenerComentarios").value;
    var crearPend=document.createElement("li");
    var indexListas=listas.length-1;
    var boton=document.createElement("button");
    
    
    listas[indexListas].pendiente=pendiente;
    crearPend.id=indice;
    lugar.appendChild(crearPend);
    lugar.appendChild(boton);
    crearPend.innerText=pendiente;   
    boton.innerText=boton.name="X";
    boton.setAttribute("onClick","borrarPendientes();");
    
}*/



