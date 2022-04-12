let nota=Number(prompt("Ingresa tu calificación"));
if (nota>=3 && nota<=5){
    alert("Estás aprobado");
}else if(nota<3 && nota>=0){
    alert("Estás reprobado");
}
else{
    alert("Dato inválido");
}

//Operador Ternario
let edad=Number(prompt("Ingrese su edad"));
let resultado=(edad>=18)?"Eres mayor de edad":"Eres menor de edad";
alert(resultado);

//Switch case

let expresion=1;
switch (expresion) {
    case 1:
      alert("El caso de Switch case es el 1");
      break;
    case 2:
        alert("El caso de Switch case es el 2");
      break;
  
    case 3:
        alert("El caso de Switch case es el 3");
      break;
    default:
      alert("El caso del Switch case no es ni 1, ni 2, ni 3");
  }
//Bucles

let contador=1;
while(contador<=10){
    console.log("Esta es la iteración nº"+contador);
    contador++;
}
