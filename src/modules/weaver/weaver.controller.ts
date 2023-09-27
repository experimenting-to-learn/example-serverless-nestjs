import { Controller, Get } from '@nestjs/common';
import { WeaverService } from './weaver.service';

@Controller()
export class WeaverController {
  constructor(private readonly appService: WeaverService) {}

  @Get('/retrieval-augmented')
  async getHello(): Promise<string[]> {
    const result = await this.appService.keywordAugmented();

    return result;
  }
}
