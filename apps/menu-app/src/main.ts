import { NestFactory } from '@nestjs/core';
import { MenuAppModule } from './menu-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MenuAppModule);
   const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672';
 
   app.enableCors();
   await app.listen(process.env.port ?? 3002);
 
   const microservice = app.connectMicroservice<MicroserviceOptions>({
     transport: Transport.RMQ,
     options: {
       urls: [RABBITMQ_URL],
       queue: 'payement_queue',
       queueOptions: { durable: true },
     },
   });
 
   await microservice.listen();
 
   Logger.log('Application  is listening on rabbitmq');
}
bootstrap();
