import { Module } from '@nestjs/common';
import { ApigatewayModule } from './apigateway/apigateway.module';
import { ApigatewayController } from './apigateway/controller/apigateway.controller';
import { ApigatewayService } from './apigateway/services/apigateway.service';

@Module({
  imports: [ApigatewayModule],
  controllers: [ApigatewayController],
  providers: [ApigatewayService],
})
export class ApiGatewayModule {}
