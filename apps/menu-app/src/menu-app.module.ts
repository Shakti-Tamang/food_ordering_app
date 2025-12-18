import { Module } from '@nestjs/common';
import { MenuAppController } from './menu-app.controller';
import { MenuAppService } from './menu-app.service';

@Module({
  imports: [],
  controllers: [MenuAppController],
  providers: [MenuAppService],
})
export class MenuAppModule {}
