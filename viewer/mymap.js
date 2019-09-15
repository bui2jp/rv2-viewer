
var mymap;
function myInitMap() {


    var myLatLng = { lat: 35.682272, lng: 139.766025 };

    mymap = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        // disableDoubleClickZoom: true,
        // draggable: false,
        zoom: 16
    });

    // var goimage = './gopher.png';

    var marker = new google.maps.Marker({
        position: { lat: 35.67975, lng: 139.764583 },
        map: mymap,
        animation: google.maps.Animation.DROP,
        icon: {
            url: './gopher.png',
            scaledSize: new google.maps.Size(1634 / 100 * 3, 2224 / 100 * 3)
        },
        title: 'Hello World!'
    });

     google.maps.event.addListener (mymap, 'click', function(event) {
        // var result = [event.latLng.lat(), event.latLng.lng()];
        // transition(result);
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
    });




    
//     function myHandler(event,arg2) {
//         console.log(event.latLng.lat());
//         console.log(event.latLng.lng());
//         console.log(arg2);
//     };
//     google.maps.event.addListener(mymap, 'click', myHandler);
}
