import { Injectable } from '@nestjs/common';
import { Parser, IParser } from 'src/core';

@Injectable()
export class JSONParser extends Parser implements IParser {
  getObject(name: string): any {
    const data = super.getFile(name);
    return JSON.parse(data);
  }
}
