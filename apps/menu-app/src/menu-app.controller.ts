import { Controller, Get } from '@nestjs/common';
import { MenuAppService } from './menu-app.service';

@Controller()
export class MenuAppController {
  constructor(private readonly menuAppService: MenuAppService) {}

  @Get()
  getHello(): string {
    return this.menuAppService.getHello();
  }
}
