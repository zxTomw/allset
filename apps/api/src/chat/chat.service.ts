import { Injectable } from '@nestjs/common';
import { ChatDeepSeek } from '@langchain/deepseek';
import { Observable, from } from 'rxjs';

@Injectable()
export class ChatService {
  private model = new ChatDeepSeek({
    model: 'deepseek-chat',
    streaming: true, // enable token-level streaming
    temperature: 0.7,
  });

  /**
   * Internal helper: wraps the AsyncGenerator from
   * `model.stream()` into an async generator of string chunks.
   */
  private async *streamGenerator(userPrompt: string): AsyncGenerator<string> {
    // mix in your system prompt here
    const messages = [
      { role: 'system', content: '你是“小齐”，菜齐了 App 的智能厨房助手。' },
      { role: 'user', content: userPrompt },
    ];
    // `.stream()` returns an AsyncGenerator of AIMessageChunks
    const aiStream = this.model.stream(messages);

    for await (const chunk of await aiStream) {
      yield chunk.text;
    }
  }

  /**
   * Public method: converts that generator into an RxJS observable
   * so Nest’s @Sse can consume it directly.
   */
  streamChat(userPrompt: string): Observable<string> {
    return from(this.streamGenerator(userPrompt));
  }
}
