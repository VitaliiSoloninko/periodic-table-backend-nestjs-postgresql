import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Periodensystem-Explorer REST API')
    .setDescription('Entwickelt von Vitalii Soloninko')
    .setVersion('1.0.0')
    .addTag('REST API Documentation')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.enableCors();

  await app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`),
  );
}
start();
