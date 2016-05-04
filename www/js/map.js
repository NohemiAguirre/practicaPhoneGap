$(document).on("pageinit", "#paginaMapa", function(e,data){
	var defaultPos = new google.maps.LatLng(28.7090258, -106.1059379)

	if (navigator.geolocation) {
		function exito(pos){
			MuestraMapa(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitue));
		}
		function falla(error){
			alert("Error en servicio geo");
			MuestraMapa(defaultPos);
		}

		var option = {maximumAge: 500000, enableHighAccuracy:true, timeout:5000};
		navigator.geolocation.getCurrentPosition(exito,falla,option):
	}else{
		MuestraMapa(defaultPos);
	}

	function MuestraMapa(LatLng){
		var myOptions = {
			zoom:16,
			center:latlng,
			disableDefaultUI:true,
			mapTypeId:google.maps.mapTypeId.ROADMAP

		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

		var infowindow = new google.maps.infowindow({
			position: latlng,
			content: '<p>Tu posicion actual</p>' +latlng
		});

		var marker = new google.maps.Marker({
			position: latlng,
			map:map,
			title: "Mi posicion",
			animation: google.maps.Animation.DROP
		});
		google.maps.event.addListener(marker, 'click', function(){
			infowindow.open(map,marker);
		});
	}
	
});