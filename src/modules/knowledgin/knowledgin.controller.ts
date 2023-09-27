import { Body, Controller, Get, HttpCode, Put, Param } from '@nestjs/common';
import { KnowledginService } from './knowledgin.service';
import { DatasetDto } from './dto/dataset.dto';

@Controller('knowledgin')
export class KnowledginController {
  constructor(private readonly appService: KnowledginService) {}

  @Put('dataset')
  @HttpCode(201)
  async addDataset(@Body() dataset: DatasetDto): Promise<string[]> {

    console.log(dataset)
    
    return ["dataset created"]
  }

  @Get('hello')
  async hello(): Promise<string[]> {

    return ['world!'];
  }

  @Get('semantic-expansion/:keyword')
  async semanticExpansion(@Param('keyword') keyword: string): Promise<string[]> {
    
    return [keyword];
  }
}
