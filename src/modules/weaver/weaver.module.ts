import { Module } from '@nestjs/common';
import { WeaverService } from './weaver.service';
import { WeaverController } from './weaver.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WeaverController],
  providers: [WeaverService],
})
export class WeaverModule {}
