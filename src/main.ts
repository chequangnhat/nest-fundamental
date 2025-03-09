import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 1. Create NestJS application
  const app = await NestFactory.create(AppModule);
  // 2. Start HTTP server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
