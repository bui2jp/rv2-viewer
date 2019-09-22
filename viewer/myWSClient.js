//websocket
console.log('myWSClient start');

class MyWSClient {
    
    ws_object = null;

    constructor() {
        this.ws_server_url = 'wss://1frpd3s0zl.execute-api.ap-northeast-1.amazonaws.com/dev';
        this.ws_object = null;
    }

    init() {
        this.ws_object = new WebSocket(this.ws_server_url);

        //add event listner
        this.ws_object.onopen = this.myOnOpen;
        this.ws_object.onmessage = this.myOnMessage;
        this.ws_object.onclose = this.myOnClose;        
    }

    myOnOpen(event) {
        //this.ws_object.xxxのイベントになる
        //thisはthis.ws_objectを挿します
        console.log('myOnOpen');

        let myLatLng = { 'lat': 35.685114, 'lng': 139.752616 };
        let msgObj = {
            "action": "message",
            "data": JSON.stringify(myLatLng),
            //"data": "hello world from Chrome"
        };
        let msgString = JSON.stringify(msgObj);
    
        let startDate = new Date().getTime();
        console.log(startDate);
        console.log("send message to ws server: " + msgString );
        this.send(msgString);        
    }

    myOnMessage(event) {
        console.log('myOnMessage');
        console.log(new Date());
        let endDate = new Date().getTime();
        //console.log('onmessage:' + event.data + ':' + (endDate - startDate) + 'ms');
    
        let json = event.data;
        let obj = JSON.parse(json);
    
        console.log(obj);
    
        let result = [obj.lat, obj.lng];
        //transition(result);
        simpleTransition(result);
    }

    myOnClose(event) {
        console.log('myOnClose');
        myWSClientObj.init();
    }    
}

var myWSClientObj = new MyWSClient();
myWSClientObj.init();

