function get_regiones(){
	var regiones= [
		{
			name: "arica",
			distance: 2059
		},
		{
			name: "iquique",
			distance: 1789
		},
		{
			name: "antofagasta",
			distance: 1368
		},
		{
			name: "copiapo",
			distance: 1567
		},
		{
			name: "la_serena",
			distance: 470
		},
		{
			name: "valparaiso",
			distance: 116
		},
		{
			name: "rancagua",
			distance: 0
		},
		{
			name: "talca",
			distance: 84
		},
		{
			name: "concepcion",
			distance: 257
		},
		{
			name: "temuco",
			distance: 500
		},
		{
			name: "valdivia",
			distance: 690
		},
		{
			name: "puerto_montt",
			distance: 848
		},
		{
			name: "coyhaique",
			distance: 1032
		},
		{
			name: "punta_arenas",
			distance: 1888
		},
		{
			name: "santiago",
			distance: 3004
		}
	]
}

var regiones = JSON.parse(regiones);
var leng = regiones.length; 
console.log(paises[0].nombre);
	
var lista = $("#origen");
var listaFinal = '';	
	for (var i=0; i < leng; i++){

		var html ='<option value="Arica, Chile">Arica</option>'; 
		listaFinal +=html;
		
	}
	
	lista.html(listaFinal); 
	var lis=$('li');
// listaPaises.each(function(){
// var src = $(this).find('img').attr('src');	
//})
	for(var i= 0; i<lis.length; i++)
	{
		//lis[i].on('click',onLinkClick);
		lis[i].addEventListener('click',onLinkClick);
	}
	
}



