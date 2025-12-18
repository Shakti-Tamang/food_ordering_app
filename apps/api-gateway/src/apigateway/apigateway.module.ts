import { Module } from '@nestjs/common';
import { ApigatewayController } from './controller/apigateway.controller';
import { ApigatewayService } from './services/apigateway.service';

@Module({
  controllers: [ApigatewayController],
  providers: [ApigatewayService]
})
export class ApigatewayModule {}
