import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // console.log(app);
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`"server listening on http://localhost:3000"`);
  });
}

bootstrap();
