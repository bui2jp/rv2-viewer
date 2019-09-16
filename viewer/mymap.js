
var mymap;
var marker;

function myInitMap() {

    //35.685114, 139.752616
    var tokyoStaLatLng = { lat: 35.685114, lng: 139.752616 }; 

    mymap = new google.maps.Map(document.getElementById('map'), {
        center: tokyoStaLatLng,
        // disableDoubleClickZoom: true,
        // draggable: false,
        zoom: 15
    });

    // var goimage = './gopher.png';

    marker = new google.maps.Marker({
        position: kitteLatLng,
        map: mymap,
        animation: google.maps.Animation.DROP,
        icon: {
            url: './gopher.png',
            scaledSize: new google.maps.Size(1634 / 100 * 3, 2224 / 100 * 3)
        },
        title: 'Hello World!'
    });

     google.maps.event.addListener (mymap, 'click', function(event) {
        var result = [event.latLng.lat(), event.latLng.lng()];
        transition(result);
        // myTransitionP([gopherRoute[0].lat, gopherRoute[0].lng])
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
    });
}

var kitteLatLng = { lat: 35.67975, lng: 139.764583 }; 
var numDeltas = 100;
var delay = 10; //milliseconds
var i = 0;
var deltaLat;
var deltaLng;

var position = [kitteLatLng.lat, kitteLatLng.lng];

function transition(result){
    i = 0;
    deltaLat = (result[0] - position[0])/numDeltas;
    deltaLng = (result[1] - position[1])/numDeltas;

    // deltaLat = (result[0] - position[0])/numDeltas;
    // deltaLng = (result[1] - position[1])/numDeltas;
    moveMarker();
}

function moveMarker(){
    position[0] += deltaLat;
    position[1] += deltaLng;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
    marker.setPosition(latlng);
    if(i!=numDeltas){
        i++;
        console.log('setTimeout :' + i);
        setTimeout(moveMarker, delay);
    }
}

