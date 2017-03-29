var ciudades = {
    'Arica':{
            ciudad: 'Arica',
            coordenadas: [-18.4782534,-70.31259879999999
            ],
            distancia: 2059
        },
    'Iquique': {
        ciudad: 'Iquique',
        coordenadas: [-20.2307033,-70.1356692
        ],
        distancia: 1789
    },
    'Antofagasta': {
        ciudad: 'Antofagasta',
        coordenadas: [-23.6509279,-70.39750219999996
        ],
        distancia: 1368
    },
    'Calama': {
        ciudad: 'Calama',
        coordenadas: [-22.4543923,-68.92938190000001
        ],
        distancia: 1567
    },
    'La Serana': {
        ciudad: 'La Serana',
        coordenadas: [-29.9026691,-71.25193739999997
        ],
        distancia: 470
    },
    'Valparaíso': {
        ciudad: 'Valparaíso',
        coordenadas: [-33.047238, -71.61268849999999
        ],
        distancia: 116
    },
    'Santiago': {
        ciudad: 'Santiago',
        coordenadas: [-33.4488897,-70.6692655
        ],
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
        coordenadas: [-35.4232444, -71.64848039999998
        ],
        distancia: 257
    },
    'Concepción': {
        ciudad: 'Concepción',
        coordenadas: [-36.8201352, -73.0443904
        ],
        distancia: 500
    },
    'Temuco': {
        ciudad: 'Temuco',
        coordenadas: [-38.7359018, -72.59037390000003
        ],
        distancia: 690
    },
    'Valdivia': {
        ciudad: 'Valdivia',
        coordenadas: [-39.8173788, -73.24253329999999
        ],
        distancia: 848
    },
    'Puerto Montt': {
        ciudad: 'Puerto Montt',
        coordenadas: [-41.468917, -72.9411364
        ],
        distancia: 1032
    },
    'Coyhaique': {
        ciudad: 'Coyhaique',
        coordenadas: [-45.5712254, -72.068265
        ],
        distancia: 1888
    },
    'Punta Arenas': {
        ciudad: 'Punta Arenas',
        coordenadas: [-53.1638329, -70.91706829999998
        ],
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

