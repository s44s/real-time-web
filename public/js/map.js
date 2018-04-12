var markers = {};
var map;
var socket = io();

socket.on('chat message', function(msg){
	if(msg.message.includes("weesperplein")){
		var locatie = {
			lat: 52.361734,
			lng: 4.907702
		};
		var maps = document.getElementById('map');
		maps.style.display = "block"

		newMarker(locatie);
	}

	if(msg.message.includes("waterlooplein")){
		var locatie = {
			lat: 52.368054,
			lng: 4.902201
		};

		var maps = document.getElementById('map');
		maps.style.display = "block"

		newMarker(locatie);
	}
});

function initMap() {
	URL = window.location.href;
	socket = io.connect(URL);
	socket.on("connect", function() {
		var messages = document.getElementById('messages');
		var div = document.createElement('div')
		div.id = "map";
		var googleMaps = messages.appendChild(div);

		div.style.display = "none"


		map = new google.maps.Map(googleMaps, {
				zoom: 11.9,
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
