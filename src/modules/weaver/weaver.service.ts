import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import xml2js from 'xml2js';

const xmlParser = new xml2js.Parser();

@Injectable()
export class WeaverService {
  constructor(private readonly httpService: HttpService) {}

  async keywordAugmented(): Promise<string[]> {
    const { data } = await this.httpService.get('https://lookup.dbpedia.org/api/search?query=pedestrain').toPromise()

    const parsedResult = await xmlParser.parseStringPromise(data)
    const resultArray : [] = parsedResult['ArrayOfResults']['Result']

    const parsedLabels : string[] = []
    for(let i=0; i < resultArray.length; i++){
        const labelArray = resultArray[i]['Label']
        parsedLabels.push(labelArray[0])
        console.log(parsedLabels)
    }

    return parsedLabels
  }
}
