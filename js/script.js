function initialize(){
  var mapOptions ={
    center: new google.maps.LatLng(23.0,90.0),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    scrollwheel: true,
    draggable: true,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
  };

var map = new google.maps.Map(document.getElementById("map"),mapOptions);
}
google.maps.event.addDomListener(window,'load',initialize);
