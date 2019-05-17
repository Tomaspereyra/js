function mostrarTabla(tamano,miembros){
var table = document.getElementById("data");
var i;
var row;
var col;
for (i=0;i<tamano;i++){
  row = table.insertRow(i+1);<!-- i = indice de las filas-->
  var member = miembros[i];

  var colName = row.insertCell(0); <!-- indices de la columnas -->
  var colParty = row.insertCell(1);
  var colState = row.insertCell(2);
  var colSeniority = row.insertCell(3);
  var colPercentage = row.insertCell(4);
  var urlPage = document.createElement("A");<!-- Creo elemento <a>-->
  if (member.middle_name !=null){  <!--si tiene segundo nombre-->

  urlPage.innerHTML=member.last_name+" "+member.first_name+" "+member.middle_name;
  urlPage.href= member.url;
  colName.appendChild(urlPage);
}
else{

  urlPage.innerHTML=member.last_name+" "+member.first_name; <!--Agrego texto al link-->
  urlPage.href = member.url; <!-- Guardo la direccion url en el link -->
  colName.appendChild(urlPage);<!-- Agrego el elemento <a> a la columna-->
}
  colParty.innerHTML = member.party;
  colState.innerHTML = member.state;
  colSeniority.innerHTML = member.seniority;
  colPercentage.innerHTML = member.votes_with_party_pct+" %";


}

}
var miembros = data.results[0].members;
mostrarTabla(miembros.length,miembros);
function limpiarTabla(){
var table = document.getElementById("data");

const longitud = table.rows.length;
  for (var i=0;i<longitud-1;i++){
    table.deleteRow(1);

  }
}

function buscarMiembrosPorPartido(miembros,filtro){
 var encontrados=[];

  for(var i=0;i<miembros.length;i++){

    if(miembros[i].party==filtro){
      encontrados.push(miembros[i]);

    }
  }
  return encontrados;

}
function buscar(){
  var checkboxes= document.querySelectorAll('input[name=partido]:checked');
  var aux=[];
  if(checkboxes.length>0){
  for(var i=0;i<checkboxes.length;i++){
   aux=aux.concat(buscarMiembrosPorPartido(data.results[0].members,checkboxes[i].defaultValue));

  }
  limpiarTabla();
  mostrarTabla(aux.length,aux);}
  else {<!-- si no hay checkbox precionados, muestro la tabla original -->
    mostrarTabla(data.results[0].members.length, data.results[0].members);
  }
}


 document.getElementById("independent").addEventListener("click",buscar);<!-- checkbox de partido -->
 document.getElementById("republican").addEventListener("click",buscar);
 document.getElementById("democrat").addEventListener("click",buscar);

<!-- Aca empieza el ejercicio n°11 filtros por estado -->
function traerEstados(miembros){
  var estados=[];
  for(var i=0;i<miembros.length;i++){
    estados.push(miembros[i].state);

  }
  return estados;


}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
var estados = traerEstados(miembros).filter(onlyUnique); <!--eliminar estados repetidos-->

for(var i=0;i<estados.length;i++){<!-- cargo estados en la pag-->
  var input = document.createElement("A");
  input.setAttribute("NAME","estado");
  input.setAttribute("TYPE","button")
  input.setAttribute("CLASS","dropdown-item btn btn-dark");
  input.setAttribute("VALUE",estados[i]);
  input.innerHTML=estados[i];
  document.getElementById("estados").appendChild(input);

}

function buscarPorEstado(estado){ <!--filtro-->
  var miembros = data.results[0].members;
  var encontrados = [];
  for(var i=0;i<miembros.length;i++){
    if(miembros[i].state==estado){
      encontrados.push(miembros[i]);
    }
  }

  limpiarTabla();
  mostrarTabla(encontrados.length,encontrados);

}

var estados =document.getElementsByName("estado");
for(var i=0;i<estados.length;i++){
  estados[i].addEventListener("click",function(){
    document.getElementById("dropdownMenuButton").innerHTML=this.innerHTML;<!-- muestro el estado cliqueado-->

    if(this.innerHTML!="ALL"){ <!-- si se hace click en un estado,busca-->
        buscarPorEstado(this.innerHTML);
    }
    else{ <!-- si no,muestra tabla original-->
        mostrarTabla(data.results[0].members.length, data.results[0].members);
    }
    });
}
