RI.init();
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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}