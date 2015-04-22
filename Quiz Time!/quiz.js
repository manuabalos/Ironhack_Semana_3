function datosUsuario() {
  var nombre = prompt("¿Cuál es tu nombre?");
  usuario.nombre = nombre;
}

function pregunta1(){
	primeraPregunta = prompt("¿ (3-1) === 2 ? (V o F)");

	if(primeraPregunta.toUpperCase() == "V")
		primeraPregunta = true
	else if(primeraPregunta.toUpperCase() == "F")
		primeraPregunta = false
	else
	{
		alert("ERROR: Introduzca su respuesta de nuevo con V o F.");
		return pregunta1();
	}
	respuestas.push(primeraPregunta);

}

function pregunta2(){
	segundaPregunta = prompt("¿Cuál de los siguientes nombres es el unico que pertenece a un lenguaje de programación? \n H++, JFuery o JavaScript.");
	segundaPregunta = segundaPregunta.toLowerCase();
	switch (segundaPregunta){
		case "h++":
			segundaPregunta = false
			break;
		case "jfuery":
			segundaPregunta = false
			break;
		case "javascript":
			segundaPregunta = true
			break;
		default:
			alert("ERROR: Introduzca su respuesta de nuevo correctamente.");
			return pregunta2();
	}
	respuestas.push(segundaPregunta);
}

function pregunta3(){
	terceraPregunta = prompt("En Javascript, ¿Se puede comparar dos objetos distintos con el signo '==='? (V o F)");
	if(terceraPregunta.toUpperCase() == "V")
		terceraPregunta = false
	else if(terceraPregunta.toUpperCase() == "F")
		terceraPregunta = true
	else
	{
		alert("ERROR: Introduzca su respuesta de nuevo con V o F.");
		return pregunta3();
	}
	respuestas.push(terceraPregunta);
}

function pregunta4(){
	cuartaPregunta = prompt("¿Que devolvera la siguiente instrucción?\n var aNumber = 7; \n var evenOrOdd = (aNumber % 2 === 0) ? 'even' : 'odd'");
	if(cuartaPregunta.toLowerCase() == "even")
		cuartaPregunta = false
	else if(cuartaPregunta.toLowerCase() == "odd")
		cuartaPregunta = true
	else
	{
		alert("ERROR: Introduzca su respuesta de nuevo eligiendo entre Even o Odd.");
		return pregunta4();
	}
	respuestas.push(cuartaPregunta);

}

function evaluar(arrayRespuestas){
	var acertadas = 0;
	var falladas = 0;
	for(i=0; i<arrayRespuestas.length; i++)
	{
		if(arrayRespuestas[i] == true)
			acertadas++;
		else
			falladas++;
	}
	usuario["correctas"] = acertadas;
	usuario["incorrectas"] = falladas;

}

function mostrarResultados(usuario){

	  
	alert("RESULTADOS de "+usuario.nombre+"\n Acertadas -> "+ usuario.correctas +"\nFalladas -> "+ usuario.incorrectas);
}

var usuario= {}; // Para almacenar la informacion del usuario
var respuestas = []; // Para almacenar las respuestas del usuario

datosUsuario(); // Nombre del usuario
pregunta1(); // Primera pregunta
pregunta2(); // Segunda pregunta
pregunta3(); // Tercera pregunta
pregunta4(); // Cuarta pregunta
evaluar(respuestas) // Evaluacion de las repuestas
mostrarResultados(usuario); // Mostramos los resultados