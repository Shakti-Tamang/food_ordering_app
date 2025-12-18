import { NestFactory } from '@nestjs/core';
import { MenuAppModule } from './menu-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MenuAppModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
