$('#btn01').click(function (e) {
    console.log('click btn01 start');

    let latValue = 35.685114;
    let lngValue = 139.753;

    for(var i=0.0001; i<0.01; i=i+0.0001){
        console.log('click btn01 myWSClientObj.ws_object.send');
        lngValue = lngValue + i;
        let msgObj = {
            action: "message",
            data: JSON.stringify({ lat: latValue, lng: lngValue })
        }
        myWSClientObj.ws_object.send(JSON.stringify(msgObj));
    }

    console.log('click btn01 end');
});
