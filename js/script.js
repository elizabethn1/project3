/*var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('mapcanvas'), {
  center: {lat: 35.65926, lng: 139.70127879514445},
  zoom: 15
  });
}*/

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

    const blueCoords = [
      {lat: 35.66204542275932, lng: 139.70173016223686 },
	  {lat: 35.66272533465179, lng: 139.7032321991991},
	  {lat: 35.66155727731734, lng: 139.70192328127484},
    ];

    new google.maps.Polygon({
      myMap,
      paths: blueCoords,
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0000FF",
      fillOpacity: 0.35,
      draggable: true,
      geodesic: false,
  });

	//alert('it works');
}

//google.maps.event.addDOMListener(window, 'load', initMap);

window.initMap=initMap;


