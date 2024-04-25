import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export async function getSwaggerDocument(app) {
  const config = new DocumentBuilder()
    .setTitle('PPAA - Info UNLP')
    .setVersion('0.0.1')
    .addTag('ppaa')
    .build();

  return SwaggerModule.createDocument(app, config);
}
