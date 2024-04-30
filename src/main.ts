import { SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { getSwaggerDocument } from './modules/swagger.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const document = await getSwaggerDocument(app);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
