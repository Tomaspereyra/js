//Exercise 1
var nombres = ["Anahi Ayelen","Francisco","Gaston","Juan","Maria Gabriela","Maria Virginia","Maximiliano","Nicolas","Sebastian","Federico"];
var i;
var aux;
for(i=0; i<nombres.length;i++){
  if(nombres[i].localeCompare(nombres[i+1])>0){
    aux=nombres[i];
    nombres[i]=nombres[i+1];
    nombres[i+1]=aux;

  }
}
console.log("Nombres: "+nombres)
console.log("Primero: "+nombres[0]);
console.log("Ultimo: "+nombres[nombres.length-1]);

//Exercise 2
var edades =[18,30,40,27,36,23,21,34,26,29];
var pares=[];
i=0;
console.log("Edades:")
while(i<edades.length){
  console.log(edades[i]);
  if(edades[i]%2==0){
  pares.push(edades[i]);}
  i++;

}
console.log("Edades pares:"+pares);

//Exercise 3

function numeroMenor(numeros){
  var i;
  var menor=numeros[0];
  for(i=0;i<numeros.length;i++){
    if(numeros[i]<menor){
      menor=numeros[i];
    }
  }
 return menor;
}
console.log("Menor:"+numeroMenor(edades));

//Exercise 4

function numeroMayor(numeros){
  var i;
  var mayor=numeros[0];
  for(i=0;i<numeros.length;i++){
    if(numeros[i]>mayor){
      mayor=numeros[i];
    }
  }
  return mayor;
}
console.log("Mayor: "+numeroMayor(edades));

//Exercise 5

function imprimirPorIndice(array,indice){
  console.log(array[indice]);

}
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
imprimirPorIndice(array,index);

//Exercise 6
var array = [3,6,67,6,23,3,100,3,93,17,24,7,1,33,45,28,33,23,12,99,100];

function imprimirRepetidos(array){
  var repetidos =[];
  var i;
  var j;
  for (i=0;i<array.length;i++){

    for(j=i;j<array.length;j++){
      if(array[i]==array[j+1]){
        if(repetidos.length>0 && !estaEnElArray(repetidos,array[i])){
            repetidos.push(array[i]);
        }
        else{
           repetidos.push(array[i]);

        }




    }

  }


}
console.log(repetidos);
}

/* sigue recorriendo cuando no lo encuentra!!!!
function estaEnElArray(array,numero){

  var i=0;
  var encontrado = false;
  while((!encontrado) && (i<array.length)){
    if(array[i]==numero){

      encontrado=true;
    }
  i=i+1;
  }
  return encontrado;

}
console.log(estaEnElArray(array,300));*/
