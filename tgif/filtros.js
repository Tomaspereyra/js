
  function fetchJSON(url){
  var app = new Vue({
      el:'#app',
      data:{
        miembros:[],
        estados:[]
      },
      methods:{
        filtrarEstado(estado){
          document.getElementById("dropdownMenuButton").innerHTML=estado;
          if(estado!="ALL"){ //si se hace click en un estado,busca-->
              app.miembros=buscarPorEstado(estado);
          }
          else{ //muestro todo;
            app.miembros=data.results[0].members;
          }
        },
        filtrarPartido(){
         let checkboxes= document.querySelectorAll('input[name=partido]:checked');
         let aux=data.results[0].members;
         if(checkboxes.length>0){
           aux=[]; // si se selecciono algun checkbox, vacio el array de miembros
         for(var i=0;i<checkboxes.length;i++){
          aux=aux.concat(buscarMiembrosPorPartido(data.results[0].members,checkboxes[i].defaultValue));
          //Ahora lo cargo con los partidos seleccionados.
         }
        }
         app.miembros=aux; // seteo los miembros que tienen que mostrar;
       }
      }
    });

  fetch(url,{
    method:'GET',
    headers:{
      'X-API-Key':'KQcKrS8u50etFZIwwqYL5awbL0rF55usagtY04HA'}
  }).then((response) =>{
    return response.json();
  }).then((json)=>{
      data=json;
      app.miembros = data.results[0].members;
      app.estados = traerEstados(app.miembros).filter(onlyUnique); //trae los estados, sin repeticiones.
    }).catch((error)=>
    {console.log("error:"+error);});
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
//Aca empieza el ejercicio n°11 filtros por estado -->
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

function buscarPorEstado(estado){ //filtro
  var miembros = data.results[0].members;
  var encontrados = [];
  for(var i=0;i<miembros.length;i++){
    if(miembros[i].state==estado){
      encontrados.push(miembros[i]);
    }
  }
  return encontrados;

}
/* Ya no se usan mas
function mostrarTabla(tamano,miembros){
var table = document.getElementById("data");
var i;
var row;
var col;
for (i=0;i<tamano;i++){
  row = table.insertRow(i+1);//i = indice de las filas
  var member = miembros[i];

  var colName = row.insertCell(0); // indices de la columnas
  var colParty = row.insertCell(1);
  var colState = row.insertCell(2);
  var colSeniority = row.insertCell(3);
  var colPercentage = row.insertCell(4);
  var urlPage = document.createElement("A"); //Creo elemento <a>
  if (member.middle_name !=null){ //si tiene segundo nombre

  urlPage.innerHTML=member.last_name+" "+member.first_name+" "+member.middle_name;
  urlPage.href= member.url;
  colName.appendChild(urlPage);
}
else{

  urlPage.innerHTML=member.last_name+" "+member.first_name; //Agrego texto al link
  urlPage.href = member.url; //Guardo la direccion url en el link
  colName.appendChild(urlPage);// Agrego el elemento <a> a la columna
}
  colParty.innerHTML = member.party;
  colState.innerHTML = member.state;
  colSeniority.innerHTML = member.seniority;
  colPercentage.innerHTML = member.votes_with_party_pct+" %";


}
}

function limpiarTabla(){
var table = document.getElementById("data");

const longitud = table.rows.length;
  for (var i=0;i<longitud-1;i++){
    table.deleteRow(1);

  }
}*/
