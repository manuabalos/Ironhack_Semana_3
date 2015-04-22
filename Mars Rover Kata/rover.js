
function preparingMovements(rover){
	console.log("\nEstado inicial del Rover llamado '"+rover.nombre+"': "+rover.position)
	waitingMovements = prompt("Introduzca los movimientos que desee que realice el Rover: \n Por ejemplo: 'NNNENNWNNSS'");
	rover.movements = waitingMovements.toUpperCase();
	goForward(rover); // Movemos el Rover a la direccion indicada
}

function goForward(rover) {
  
  for(i=0; i<rover.movements.length; i++)
  {
  	rover.direction = rover.movements[i];
	switch(rover.direction) {
	    case 'N': // Se mueve hacia el Norte
	   	  if(rover.position[0] == 10)
	   	  	rover.position[0] = 0;
	   	  else
	      	rover.position[0]++;

	      encontrarObstaculos(rover);
	      break;
	    case 'E': // Se mueve hacia el Este
	      if(rover.position[1] == 10)
	      	rover.position[1] = 0;
	      else
	      	rover.position[1]++;

	      encontrarObstaculos(rover);
	      break;
	    case 'S': // Se mueve hacia el Sur
	      if(rover.position[0] == 0)
	      	rover.position[0] = 10;
	      else
	        rover.position[0]--;

		  encontrarObstaculos(rover);	    
	      break;
	    case 'W': // Se mueve hacia el Oeste
	      if(rover.position[1] == 0)
	      	rover.position[1] = 10;
	      else
	        rover.position[1]--;

	      encontrarObstaculos(rover);
	      break;
	  	}
  }

  console.log("Posición final de '"+rover.nombre+"': "+rover.position)

}

function encontrarObstaculos(rover){
	var obstaculoUno = [2,0]

	if((obstaculoUno[0] == rover.position[0]) && (obstaculoUno[1] == rover.position[1]) || (primerRover.position[0] == segundoRover.position[0]) && (primerRover.position[1] == segundoRover.position[1])){
		console.log("\n¡Plof! Obstaculo encontrado en la posicion: "+rover.position);
		console.log("Redirigiendo rover a la posicion anterior...\n");
		
		switch(rover.direction) {
	    case 'N': // Retrocede hacia el Sur
	    	if(rover.position[0] == 0)
	      	rover.position[0] = 10;
	        else
	        rover.position[0]--;
	      break;
	    case 'E': // Retrocede hacia el Oeste
	    	if(rover.position[1] == 0)
	      	rover.position[1] = 10;
	        else
	        rover.position[1]--;
	      break;
	    case 'S': // Retrocede hacia el Norte
	    	if(rover.position[0] == 10)
	   	  	rover.position[0] = 0;
	   	    else
	      	rover.position[0]++;
	      break;
	    case 'W': //Retrocede hacia el Este
	    	if(rover.position[1] == 10)
	      	rover.position[1] = 0;
	        else
	      	rover.position[1]++;
	      break;
	  	}
	  	console.log("Continuando con los siguientes movimientos.\n");
	}
		
}

var primerRover = {
	nombre: "Rover nº001",
	position: [0,0],
	direction: '',
	movements: ''
}

var segundoRover = {
	nombre: "Rover nº002",
	position: [0,0],
	direction: '',
	movements: ''
}


preparingMovements(primerRover); // Introducimos los movimientos del primer Rover
preparingMovements(segundoRover); // Introducimos los movimientos del segundo Rover

