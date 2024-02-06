import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: '*:*' })
export class Gateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('SOCKET', socket.id);
      console.log('Connected');
    });
  }

  @SubscribeMessage('TEST_MESSAGE')
  onNewMessage(@MessageBody() body: { message: string }) {
    console.log('BODY', body);
    this.server.emit('onMessage', {
      message: 'New message',
      body: body.message,
    });
  }
}
