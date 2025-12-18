import { Module } from '@nestjs/common';
import { PayementController } from './payement.controller';
import { PayementService } from './payement.service';

@Module({
  imports: [],
  controllers: [PayementController],
  providers: [PayementService],
})
export class PayementModule {}
