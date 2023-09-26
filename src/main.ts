import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //para evitar atributos q no esten en los DTO
    //forbidNonWhitelisted:true //alerta q hay atributos q no existe en el schema de datos del DTO
  }))
  await app.listen(3000);
}
bootstrap();
