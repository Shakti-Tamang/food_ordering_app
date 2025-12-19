import { NestFactory } from '@nestjs/core';
import { OrdeeDetailsModule } from './ordee-details.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(OrdeeDetailsModule);
  const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672';

  app.enableCors();
  await app.listen(process.env.port ?? 3003);

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: 'orderdetails_queue',
      queueOptions: { durable: true },
    },
  });

  await microservice.listen();

  Logger.log('Application  is listening on rabbitmq');
}
bootstrap();
