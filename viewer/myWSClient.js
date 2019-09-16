//websocket
console.log('myWSClient start');

var ws_server_url = 'wss://6ozuc52t19.execute-api.ap-northeast-1.amazonaws.com/dev';
var exampleSocket = new WebSocket(ws_server_url);

exampleSocket.onopen = function (event) {
    console.log('websocket connected :)');

    //{"action":"sendmessage", "data":"hello world"}
    let myLatLng = { 'lat': 35.685114, 'lng': 139.752616 };
    let msgObj = {
        "action": "sendmessage",
        "data": JSON.stringify(myLatLng),
        //"data": "hello world from Chrome"
    };
    let msgString = JSON.stringify(msgObj);
    exampleSocket.send(msgString);
};

exampleSocket.onmessage = function (event) {
    console.log(event.data);

    var json = event.data;
    obj = JSON.parse(json);

    console.log(obj);

    var result = [obj.lat, obj.lng];
    transition(result);
}

console.log('myWSClient end');
