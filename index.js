 //1

 const bienvenido=(nombre, apellido) => {}

 let nombre = prompt ("Ingrese su nombre");
 let apellido = prompt ("Ingrese su apellido");
 
 
 alert (`Bienvenido/a ${nombre} ${apellido} a King Toot's Music Store`);
 console.log (`Bienvenido/a ${nombre} ${apellido} a King Toot's Music Store`);
 for (let i = 0; i < nombre.length; i ++){
     console.log (nombre[i]);}
 
 
 
 //2
 
 const sumar = (numero1, numero2) => {
     return parseInt (numero1) + parseInt (numero2);
     
 
 }
 const restar = (numero1, numero2) => {
     return parseInt (numero1) - parseInt (numero2);
     
 
 }
 let operacion = prompt ("¿Que operacion desea realizar? Ingrese '1' para sumar o '2' para restar")
 
 if (operacion == 1){
     let num1 = prompt ("Ingrese primer numero");
     let num2 = prompt ("Ingrese segundo numero");
     let resultado= sumar (num1, num2);
     alert (`Tu resultado es ${resultado}`)
     console.log (`Tu resultado es ${resultado}`)
     
     
 }
 else if (operacion == 2){
     let num1 = prompt ("Ingrese primer numero");
     let num2 = prompt ("Ingrese segundo numero");
     let resultado= restar ( num1, num2);
     alert (`Tu resultado es ${resultado}`)
     console.log (`Tu resultado es ${resultado}`)}
 
     
 
 
 
 
 
 
     
 
 