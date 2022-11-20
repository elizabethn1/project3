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


	//alert('it works');
}

//google.maps.event.addDOMListener(window, 'load', initMap);

window.initMap=initMap;


