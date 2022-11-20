var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 35.65926, lng: 139.70127879514445},
  zoom: 15
  });
}