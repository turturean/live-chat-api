import http from 'http';
import { Server } from 'socket.io';
import {MessageEntity} from "./models/message.entity";

enum MessageEvents {
  Message = 'message',
}

export function initSocketIoMiddleware(server: http.Server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {

    console.log('New Connection=', socket.id);

    socket.on(MessageEvents.Message, data => {
      console.log(`Connection id=${socket.id} received message = ${data}`)
      const entity = new MessageEntity(data)

      io.emit(MessageEvents.Message, entity);
    });
  });
}
