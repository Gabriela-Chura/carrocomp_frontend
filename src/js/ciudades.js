var ciudades = {
    'Arica':{
            ciudad: 'Arica',
            distancia: 2059
        },
    'Iquique': {
        ciudad: 'Iquique',
        distancia: 1789
    },
    'Antofagasta': {
        ciudad: 'Antofagasta',
        distancia: 1368
    },
    'Calama': {
        ciudad: 'Calama',
        distancia: 1567
    },
    'La Serana': {
        ciudad: 'La Serana',
        distancia: 470
    },
    'Valparaíso': {
        ciudad: 'Valparaíso',
        distancia: 116
    },
    'Santiago': {
        ciudad: 'Santiago'
        distancia: 0
    },
    'Rancagua': {
        ciudad: 'Rancagua',
        coordenadas: [-34.17013240000001, -70.7406259
        ],
        distancia: 84
    },
    'Talca': {
        ciudad: 'Talca',
        distancia: 257
    },
    'Concepción': {
        ciudad: 'Concepción',
        distancia: 500
    },
    'Temuco': {
        ciudad: 'Temuco',
        distancia: 690
    },
    'Valdivia': {
        ciudad: 'Valdivia'
        distancia: 848
    },
    'Puerto Montt': {
        ciudad: 'Puerto Montt',
        distancia: 1032
    },
    'Coyhaique': {
        ciudad: 'Coyhaique',
        distancia: 1888
    },
    'Punta Arenas': {
        ciudad: 'Punta Arenas,
        distancia: 3004
    }
};





$('#boton_search').on('click',function(){
	var origen = $('#origen').val();
	var distancia = ciudades[origen].distancia;
	//alert(distancia);
	
	var destino= $('#destino').val();
	var distanciaDos = ciudades[destino].distancia;
	//alert(distanciaDos);
});

$('#boton_search').on('click',function(){
	var origen = $('#origen').val();
	var distancia = ciudades[origen].distancia;
	//alert(distancia);
	
	var destino= $('#destino').val();
	var distanciaDos = ciudades[destino].distancia;
	//alert(distanciaDos);
});


var radios= document.getElementsByName("optradio");
console.log(radios);
var seleccionado = false;
for(var i=0; i<radios.length; i++) {    
  if(radios[i].checked) {
	 alert(radios[i]);
     seleccionado = true;
     break;
  }
}


