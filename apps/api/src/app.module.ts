import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RecipesModule, ChatModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
