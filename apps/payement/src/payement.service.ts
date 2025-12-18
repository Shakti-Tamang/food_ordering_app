import { Injectable } from '@nestjs/common';

@Injectable()
export class PayementService {
  getHello(): string {
    return 'Hello World!';
  }
}
