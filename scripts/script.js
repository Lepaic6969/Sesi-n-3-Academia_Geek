let nota=Number(prompt("Ingresa tu calificación"));
if (nota>3 && nota<=5){
    alert("Estás aprobado");
}else if(nota<3 && nota>=0){
    alert("Estás reprobado");
}
else{
    alert("Dato inválido");
}