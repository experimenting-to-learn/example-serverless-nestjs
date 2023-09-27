import { Module } from '@nestjs/common';
import { KnowledginService } from './knowledgin.service';
import { KnowledginController } from './knowledgin.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [KnowledginController],
  providers: [KnowledginService],
})
export class KnowledginModule {}
