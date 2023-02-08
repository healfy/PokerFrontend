import {GameMessage} from "Api/types";

export class GameHandler {
    socket: WebSocket;

    constructor(table_id: number) {
        this.socket = new WebSocket(`ws://localhost:8001/ws/tables/${table_id}`);
        this.socket.onmessage = this.onMessage
        this.socket.onopen = () => {
            console.log("Opened")
        }
    }

    sendMessage(message: GameMessage){
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message))
        }
    }

    onMessage(ev: MessageEvent) {
        console.log(JSON.parse(ev.data))
    }
}