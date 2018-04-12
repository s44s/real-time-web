var markers = {};
var map;
var socket = io();
var googleMaps = document.getElementById('map');
googleMaps.style.display = "none";

socket.on('chat message', function(msg){
	if(msg.message.includes("weesperplein")){
		var locatie = {
			lat: 52.361734,
			lng: 4.907702
		};
		googleMaps.style.display = "block";
		newMarker(locatie);
	}

	if(msg.message.includes("waterlooplein")){
		var locatie = {
			lat: 52.368054,
			lng: 4.902201
		};
		googleMaps.style.display = "block";
		newMarker(locatie);
	}
});

function initMap() {
  URL = window.location.href;
  socket = io.connect(URL);
  socket.on("connect", function() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 52.379189, lng: 4.899431}
    });
  });
}

function newMarker(location) {
 new google.maps.Marker({
      position : location,
      map: map,
      icon: {
          url: '../images/marker.svg',
          scaledSize: new google.maps.Size(20,20),
          optimized: false
      }
    });
}
