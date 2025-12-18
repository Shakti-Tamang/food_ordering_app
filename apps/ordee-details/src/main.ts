import { NestFactory } from '@nestjs/core';
import { OrdeeDetailsModule } from './ordee-details.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdeeDetailsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
