import { NestFactory } from '@nestjs/core';
import { PayementModule } from './payement.module';

async function bootstrap() {
  const app = await NestFactory.create(PayementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
