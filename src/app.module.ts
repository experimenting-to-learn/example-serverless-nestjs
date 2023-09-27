import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeaverService } from './modules/weaver/weaver.service';
import { WeaverController } from './modules/weaver/weaver.controller';
import { HttpModule } from '@nestjs/axios';
import { KnowledginController } from './modules/knowledgin/knowledgin.controller';
import { KnowledginService } from './modules/knowledgin/knowledgin.service';

@Module({
  imports: [HttpModule, ],
  controllers: [AppController, WeaverController, KnowledginController],
  providers: [AppService, WeaverService, KnowledginService],
})
export class AppModule {}
