function initMap(){
	var m=document.getElementById('mapcanvas');
	var myLocation=new google.maps.LatLng(35.65926, 139.70127879514445);
	var mapOptions={
		center: myLocation,
		zoom: 15,
	};

	var myMap=new google.maps.Map(m, mapOptions);

	var myCoordinates = [
	  {lat: 35.659367, lng: 139.700663},
	  {lat: 35.660511, lng: 139.705378},
	  {lat: 35.657722, lng: 139.706193},
	];

	var walkingPath = new google.maps.Polyline({
	  path: myCoordinates,
	  geodesic: true,
	  strokeColor: "#FF0000",
	  strokeOpacity: 1.0,
      strokeWeight: 2,
	});

	walkingPath.setMap(myMap);

	var marker = new google.maps.Marker({
		position: {lat: 35.65883755521867, lng: 139.6914948529716},
		map: myMap,
	});

  var contentString = "<p>The Shoto Museum of Art!</p>";

  var infoWindow = new google.maps.InfoWindow({
  	content: contentString,
  });

  google.maps.event.addListener (marker, 'click', function() {
    infoWindow.open(myMap, marker);
  });
}

window.initMap=initMap;


