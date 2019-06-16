var statistics ={partidos:[{partido:"Democrats",numeroDeRepresentantes:0,pctVotos:0},
{partido:"Republicans",numeroDeRepresentantes:0,pctVotos:0},{partido:"Independents",numeroDeRepresentantes:0,pctVotos:0}],
masLeales:[],menosLeales:[],masVotosPerdidos:[],menosVotosPerdidos:[]};



function estadisticas(){
//ejercicio 2
var miembros = data.results[0].members;
var democratas = miembros.filter(function(m){return m.party == "D";});
var republicanos = miembros.filter(function(m){return m.party=="R";});
var independientes = miembros.filter(function(m){return m.party =="I";});
statistics.partidos[0].numeroDeRepresentantes=democratas.length;
statistics.partidos[1].numeroDeRepresentantes=republicanos.length;
statistics.partidos[2].numeroDeRepresentantes=independientes.length;
// ejercicio 3

function porcentaje(array){
  var totalPorcentajes=0;
  var porcentaje=0;
  for(var i=0;i<array.length;i++){
    totalPorcentajes+=array[i].votes_with_party_pct;
  }
  porcentaje = totalPorcentajes/array.length
    return porcentaje.toFixed(2); // dejo solo dos decimales

}

statistics.partidos[0].pctVotos=porcentaje(democratas);
statistics.partidos[1].pctVotos=porcentaje(republicanos);
// ejercicio 4
function ordenaMenor(a,b){
  let comparacion=0;
  if(a.votes_with_party_pct>b.votes_with_party_pct){
    comparacion=1;
  }
  else{
    comparacion=-1;
  }
  return comparacion;
}
function ordenaMayor(a,b){
  let comparacion=0;
  if(a.votes_with_party_pct<b.votes_with_party_pct){
    comparacion=1;
  }
  else{
    comparacion=-1;
  }
  return comparacion;
}
function traerMenores(array,campo){//campo a buscar del objeto
  var menor = array[0][campo];
  var menoresRepetidos=[];
  for (var i=0;i<array.length;i++){
    if(menor == array[i][campo]){
        menoresRepetidos.push(array[i]);
    }
}
  return menoresRepetidos;
}
function diezPorciento(ascendente,array){//ascendente es un booleano
  var porcentajeFiltrado=0;
  var miembros =[];
  var menores =[];
  if(ascendente){
  array.sort(ordenaMenor);} //ordeno de menor a mayor
  else{
    array.sort(ordenaMayor);
  }
  while(porcentajeFiltrado <= 10){
    menores = traerMenores(array,"votes_with_party_pct");
    miembros = miembros.concat(menores); //agarro el primer elemento o los primeros si se repiten
    array.splice(0,menores.length); // borro del array de miembros los que ya cargue
    porcentajeFiltrado = (miembros.length*100)/array.length;
  }
  return miembros;
}

statistics.masLeales=diezPorciento(false,miembros);
statistics.menosLeales=diezPorciento(true,miembros);
//votos perdidos
function ordenaMenorVotosPerdidos(a,b){
  let comparacion=0;
  if(a.missed_votes>b.missed_votes){
    comparacion=1;
  }
  else{
    comparacion=-1;
  }
  return comparacion;
}
function ordenaMayorVotosPerdidos(a,b){
  let comparacion=0;
  if(a.missed_votes<b.missed_votes){
    comparacion=1;
  }
  else{
    comparacion=-1;
  }
  return comparacion;
}
function votosPerdidos(ascendente,array){
  var porcentajeFiltrado=0;
  var miembros=[];
  var menores=[];
  if(ascendente){
    array.sort(ordenaMenorVotosPerdidos);
  }
  else{
    array.sort(ordenaMayorVotosPerdidos);
  }
  while(porcentajeFiltrado<=10){
    menores = traerMenores(array,"missed_votes");
    miembros = miembros.concat(menores);
    array.splice(0,menores.length);
    porcentajeFiltrado = (miembros.length*100)/array.length;
  }
  return miembros;

}
statistics.masVotosPerdidos=votosPerdidos(false,miembros);
statistics.menosVotosPerdidos=votosPerdidos(true,miembros);
}



/*carga de tablas sin vue, ya no se usan
function cargarTablaGeneral(){
  let tabla = document.getElementById("tablaGeneral");
  let row;
    row = tabla.insertRow(0);
    row.insertCell(0).innerHTML="Democrats";
    row.insertCell(1).innerHTML=statistics.numeroDeDemocratas;
    row.insertCell(2).innerHTML=statistics.pctVotosDemocratas;
    row = tabla.insertRow(1);
    row.insertCell(0).innerHTML="Republicans";
    row.insertCell(1).innerHTML=statistics.numeroDeRepublicanos;
    row.insertCell(2).innerHTML=statistics.pctVotosRepublicanos
    row = tabla.insertRow(2);
    row.insertCell(0).innerHTML="Independents"
    row.insertCell(1).innerHTML=statistics.numeroDeIndependientes;
    row.insertCell(2).innerHTML=statistics.pctVotosIndependientes;
}
function cargarTablaLeales(idTabla,miembros){
  let tabla = document.getElementById(idTabla);
  for(let i=0;i<miembros.length;i++){
  let row = tabla.insertRow(i);
  row.insertCell(0).innerHTML=miembros[i].last_name+" "+miembros[i].first_name;
  row.insertCell(1).innerHTML=miembros[i].total_votes;
  row.insertCell(2).innerHTML=miembros[i].votes_with_party_pct;
  }
}
  function cargarTablaVotosPerdidos(idTabla,miembros){
    var tabla = document.getElementById(idTabla);
    var row;
    for(var i=0;i<miembros.length;i++){
      row = tabla.insertRow(i);
       row.insertCell(0).innerHTML=miembros[i].last_name+" "+miembros[i].first_name;
       row.insertCell(1).innerHTML=miembros[i].missed_votes;
       row.insertCell(2).innerHTML=miembros[i].missed_votes_pct;

    }
  }*/
