import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundExceptionFilter } from './filters/not-found-exception.filter';

async function bootstrap() {
  const PORT_APPLICATION = process.env.PORT_APPLICATION;
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new NotFoundExceptionFilter());

  await app.listen(PORT_APPLICATION);
  console.log(`App is listening in port ${PORT_APPLICATION}`);
}
bootstrap();
