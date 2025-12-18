import { Controller, Get } from '@nestjs/common';
import { PayementService } from './payement.service';

@Controller()
export class PayementController {
  constructor(private readonly payementService: PayementService) {}

  @Get()
  getHello(): string {
    return this.payementService.getHello();
  }
}
