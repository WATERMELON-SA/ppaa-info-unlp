// scripts/generate-swagger.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/modules/app.module';
import { getSwaggerDocument } from '../src/modules/swagger.module';
import { SwaggerModule } from '@nestjs/swagger';

import * as fs from 'fs';

async function generateSwagger() {
  const app = await NestFactory.create(AppModule);

  const document = await getSwaggerDocument(app)

  SwaggerModule.setup('api', app, document);

  fs.writeFileSync('./swagger.json', JSON.stringify(document));

  await app.close();
}

generateSwagger();
