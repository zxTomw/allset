import { Controller, Query, Sse, MessageEvent } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  /**
   * GET /chat/stream?message=…
   * Streams each token as a Server-Sent Event.
   */
  @Sse('stream')
  streamChat(@Query('message') message: string) {
    return this.chatService
      .streamChat(message)
      .pipe(map((token) => ({ data: token })));
  }
}
