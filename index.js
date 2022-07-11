//ALGORITMO-1
let nombre = "";
let apellido = "" ;
let edad = "";
  for (i =0; i<1; i ++){
      nombre += prompt ("ingrese su nombre");
      apellido += prompt ("ingrese su apellido");
      edad += prompt ("ingrese su edad");
  }
  console.log (  nombre + "   "+ apellido + "   "+ edad +  "  ");

//ALGORITMO-2 

  const numero = prompt("Escribe un número que sea divisible por 5 o por 8");
 for (let i = numero ; i<= 100; i ++){

    if(numero === null){
        alert (` No ingreso una instruccion coherente`)
        console.log ("No ingreso una instruccion coherente")
        break
      
    }
    
 
  else if (numero % 5 === 0 && numero % 8 === 0 ) {
      alert (`El numero ${i} es divisible por 5 y por 8`);
  console.log ("Es divisible por 5 y por 8");
  break
  
 
  } 
   else if ( numero %5 === 0 || numero === '' ){
    alert (`El numero ${i} es divisible por 5`);
    console.log ("Es divisible por 5");
    break
  }
  else if ( numero % 8 === 0 ){
    alert (`El numero ${i} es divisible por 8`);
    console.log ("Es divisible por 8");
    break
    
  }
  else if ( numero %5 !== 0 || numero %8 !== 0){
    alert (`El numero ${i} no es divisible por 5 ni por 8`);
    console.log ("No es divisible por 5 ni por 8");
    break
    
      
    }
    }