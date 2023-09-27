import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import xml2js from 'xml2js';

const xmlParser = new xml2js.Parser();

@Injectable()
export class KnowledginService {
  constructor() {}

  async keywordAugmented(): Promise<string[]> {

    return null
  }

  async hello(): Promise<string[]>{
    return ['world!']
  }
}
