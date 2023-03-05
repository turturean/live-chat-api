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

    socket.on(MessageEvents.Message, data => {
      const entity = new  MessageEntity(JSON.parse(data))

      io.emit(MessageEvents.Message, JSON.stringify(entity));
    });
  });
}
