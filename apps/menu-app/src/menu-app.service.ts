import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
