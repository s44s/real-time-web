var markers = {};
var map;
var socket;

function initMap() {
  URL = window.location.href;
  socket = io.connect(URL);
  socket.on("connect", function() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 10.777829, lng: 106.681630}
    });
  });
  socket.on("locationUpdated", function(locationState){
      for (var k in locationState) {
          newMarker(k, locationState[k]);
      }
  });
}

function newMarker(k, location) {
	if (markers[k] == null) {
	  markers[k] = new google.maps.Marker({
	      position : location,
	      map: map,
	      icon: {
	          url: '../images/truck.png',
	          size: new google.maps.Size(100, 100),
	          scaledSize: new google.maps.Size(50, 50),
	          origin: new google.maps.Point(0, 0),
	          anchor: new google.maps.Point(25, 25),
	          optimized: false
	      }
	    });
	} else {
	    markers[k].setPosition(location);
	}
}
