import { Module } from '@nestjs/common';
import { OrdeeDetailsController } from './ordee-details.controller';
import { OrdeeDetailsService } from './ordee-details.service';

@Module({
  imports: [],
  controllers: [OrdeeDetailsController],
  providers: [OrdeeDetailsService],
})
export class OrdeeDetailsModule {}
