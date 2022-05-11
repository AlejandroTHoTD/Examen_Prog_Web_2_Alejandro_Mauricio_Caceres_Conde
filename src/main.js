var aleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 0;
var correcto = false;

document.getElementById("botoninic").onclick = function () {
  location.href = "seleccion.html";
}

function niv1(){
  alert("Dificultad Fácil. No hay límite de intentos.");
  
  while(correcto == false){
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos ++;
    if(entrada > aleatorio){
      alert("¡Estás cerca! Prueba un número menor.")
    }else if(entrada < aleatorio){
      alert("¡Estás cerca! Prueba un número mayor.")
    }

    if(entrada == aleatorio){
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('intent').innerHTML = intentos;
      document.getElementById('correct').innerHTML = aleatorio;
    }else
      {
        alert(entrada + " no es el número correcto, intentos usados: " + intentos);
      }
  }
}

function niv2(){
  alert("Dificultad Intermedia. 10 intentos.");

  while (correcto == false && intentos < 10) {
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos++;
    if(entrada > aleatorio){
      alert("¡Estás cerca! Prueba un número menor.")
    }else if(entrada < aleatorio){
      alert("¡Estás cerca! Prueba un número mayor.")
    }

    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('intent').innerHTML = intentos;
      document.getElementById('correct').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " no es el número correcto, intentos usados: " + intentos);
    }
  }
  if (intentos == 10){
    alert("Game Over, no acertaste al número correcto.")
    document.getElementById('incorrecto').innerHTML = "El número correcto era: " + aleatorio;
    
  }
}

function niv3(){
  alert("Dificultad Difícil. 5 intentos.");

  while (correcto == false && intentos < 5) {
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos++;
    if(entrada > aleatorio){
      alert("¡Estás cerca! Prueba un número menor.")
    }else if(entrada < aleatorio){
      alert("¡Estás cerca! Prueba un número mayor.")
    }

    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('intent').innerHTML = intentos;
      document.getElementById('correct').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " no es el número correcto, intentos usados: " + intentos);
    }
  }
  if (intentos == 5) {
    alert("Game Over, no acertaste al número correcto.")
    document.getElementById('incorrecto').innerHTML = "El número correcto era: " + aleatorio;
    
    
    }
  }
