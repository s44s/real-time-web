function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude,
                                                 position.coords.longitude);
        map.setCenter(initialLocation);
    });
}

google.maps.event.addListener(map, 'bounds_changed', function(){
    var mapbounds = map.getBounds();
    bounds = [[mapbounds.getSouthWest().lng(),
               mapbounds.getSouthWest().lat()],
              [mapbounds.getNorthEast().lng(),
               mapbounds.getNorthEast().lat()]];
    socket.send({action:"subscribe", bounds:bounds});
});

var latlon = map.getCenter();
var lat = latlon.lat(),
    lon = latlon.lng();
var point = {"type":"Point", "coordinates":[lon, lat]};
socket.send({action:"message", message:chatmsg,  geometry:point});
