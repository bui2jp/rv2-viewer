//
//  ViewController.swift
//  rv2-ios-client
//
//  Created by Takuya on 2019/09/22.
//  Copyright © 2019年 Takuya. All rights reserved.
//

import UIKit
import Starscream

class ViewController: UIViewController, WebSocketDelegate {
    func websocketDidConnect(socket: WebSocketClient) {
        print("websocket is connected")
    }
    
    func websocketDidDisconnect(socket: WebSocketClient, error: Error?) {
        if let e = error as? WSError {
            print("websocket is disconnected: \(e.message)")
        } else if let e = error {
            print("websocket is disconnected: \(e.localizedDescription)")
        } else {
            print("websocket disconnected")
        }
    }
    
    func websocketDidReceiveMessage(socket: WebSocketClient, text: String) {
        print("Received text: \(text)")
    }
    
    func websocketDidReceiveData(socket: WebSocketClient, data: Data) {
        print("Received data: \(data.count)")
    }
    
    var socket: WebSocket!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        //socket = WebSocket(url: URL(string: "ws://localhost:8080/")!)
        socket = WebSocket(url: URL(string: "wss://1frpd3s0zl.execute-api.ap-northeast-1.amazonaws.com/dev")!)
        
        socket.delegate = self
        socket.connect()
    }


}

