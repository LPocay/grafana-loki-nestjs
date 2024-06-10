import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WistonLogger } from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(WistonLogger));
  await app.listen(3000);
}
bootstrap();
