// 35.676658, 139.750886 sakuradamon
// 35.684953, 139.742290 hanzomon
// 35.694525, 139.749371 kudanshita
// 35.690979, 139.756296 takebashi
// 35.67975,  139.764583 kitte
var gopherRoute = [
    { lat: 35.676658, lng: 139.750886 },
    { lat: 35.684953, lng: 139.742290 },
    { lat: 35.694525, lng: 139.749371 },
    { lat: 35.690979, lng: 139.756296 },
    { lat: 35.67975, lng: 139.764583 }
]

var my_i = 0;
var g_resolve;
function myTransitionP(result) {
    my_i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    myMoveMarker();
}


function TransPro(result) {
    return new Promise(function (resolve, reject) {
        my_i = 0;
        deltaLat = (result[0] - position[0]) / numDeltas;
        deltaLng = (result[1] - position[1]) / numDeltas;
        g_resolve = resolve;
        myMoveMarker();
    });
}

function myMoveMarker() {
    position[0] += deltaLat;
    position[1] += deltaLng;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    marker.setTitle("Latitude:" + position[0] + " | Longitude:" + position[1]);
    console.log("Latitude:" + position[0] + " | Longitude:" + position[1]);
    marker.setPosition(latlng);
    if (my_i != numDeltas) {
        my_i++;
        console.log('setTimeout --> my_i : ' + my_i);
        if (my_i === 100) {
            g_resolve();
            console.log('call resolve');
        }

        setTimeout(myMoveMarker, delay);
    }
}

TransPro([gopherRoute[0].lat, gopherRoute[0].lng]).then(function () {
        TransPro([gopherRoute[1].lat, gopherRoute[1].lng]).then(function(){
            TransPro([gopherRoute[2].lat, gopherRoute[2].lng]).then(function(){
                TransPro([gopherRoute[3].lat, gopherRoute[3].lng]).then(function(){
                    TransPro([gopherRoute[4].lat, gopherRoute[4].lng]).then(function(){
                
                    })
                })
            })
        })
    });
    

/*
var myTranPromise = new Promise(function (resolve, reject) {
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;

    myMoveMarker(resolve);
});

function myMoveMarker(resolve) {
    position[0] += deltaLat;
    position[1] += deltaLng;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    marker.setTitle("Latitude:" + position[0] + " | Longitude:" + position[1]);
    marker.setPosition(latlng);
    if (i != numDeltas) {
        i++;
        console.log('setTimeout');
        setTimeout(moveMarker(resolve), delay);
        if (i == 99) {
            resolve();
        }
    }
}

myTranPromise([gopherRoute[0].lat, gopherRoute[0].lng])
    .then(myTranPromise([gopherRoute[1].lat, gopherRoute[1].lng]));
*/
