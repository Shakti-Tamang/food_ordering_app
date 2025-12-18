import { Controller, Get } from '@nestjs/common';
import { OrdeeDetailsService } from './ordee-details.service';

@Controller()
export class OrdeeDetailsController {
  constructor(private readonly ordeeDetailsService: OrdeeDetailsService) {}

  @Get()
  getHello(): string {
    return this.ordeeDetailsService.getHello();
  }
}
