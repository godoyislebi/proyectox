function enviar(){
	//rescato los elementos del html, el div de la conversacion y los div hijos, el input del chat
	var conversacion = document.getElementById("conversacion");
	var mensajes = document.getElementById("mensajes").value;
	//lo limpio
	document.getElementById("mensajes").value ="";
    //creo un nodo de texto y le doy atributo
	var nodoTexto = document.createElement("p");
	nodoTexto.setAtributte("id","mensajes");
	//creo los divs
	var w-message-out = document.createElement("div");
	var w-message-text = document.createElement("div");
	//le doy los atributos 
	w-message-out.setAttribute("class","w-message w-message-out");
	w-message-text.setAttribute("class","w-message-text");
	createTextNode
	//introduzco el mensaje a nodo de texto
	nodoTexto.appendChild(mensajes);
	//introduzco el nodo de texto en el div contenido en el mayor
	w-message-text.appendChild(nodoTexto);
	//introduzco el div anterior en el div mayor
	w-message-out.appendChild(w-message-text);
	//introduzco el div mayor al div vacío (conversación)
	conversacion.appendChild(w-message-out);

}