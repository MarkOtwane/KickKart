import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id?: any): string {
    return 'Hello World!';
  }
}
