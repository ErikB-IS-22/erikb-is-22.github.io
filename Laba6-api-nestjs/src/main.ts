import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включение CORS
  app.enableCors({
    origin: '*', // Укажите ваш источник (например, домен вашего фронтенда)
    methods: 'GET,HEAD,POST,PUT,DELETE', // Методы, которые разрешены
    allowedHeaders: 'Content-Type, Authorization', // Заголовки, которые разрешены
  });

  await app.listen(8000);
}

bootstrap();