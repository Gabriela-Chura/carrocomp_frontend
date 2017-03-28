var map;
var latlong={
    lat: -33.4488897,
    lng: -70.6692655
}


function initMap() {
var directionsService= new google.maps.DirectionsService;
var directionsDisplay= new google.maps.DirectionsRenderer;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: latlong.lat,
            lng: latlong.lng},
			disableDefaultttUI:true,
            zoom: 14
        });
	
	directionsDisplay.setMap(map);
	
	var onChangeHandler= function(){
		var origen = $('#origen');
		var destino = $('#destino');
		var boton = $('#boton_search');
		var coches = $('#coches');
		
		if ( origen.val() != 0 & destino.val() !=0 ){
			boton.removeAttr('disabled');
			boton.click(btnSearch);
			
		}
		
		function btnSearch(){
			calculateAndDisplayRoute(directionsService, directionsDisplay);
			coches.removeAttr('hidden');
		}
		
	};
	
	document.getElementById('origen').addEventListener('change', onChangeHandler);
	document.getElementById('destino').addEventListener('change',onChangeHandler);
};

function calculateAndDisplayRoute(directionsService, directionsDisplay){
	
	directionsService.route({
		origin: document.getElementById('origen').value,
		destination: document.getElementById('destino').value,
		travelMode: google.maps.TravelMode.DRIVING
	}, function(response, status){
		if (status === google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(response);
		} else {
			console.log('Direction request failed due to' + status);
		}
	});
	
}



	
