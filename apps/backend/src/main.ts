import { NestFactory } from '@nestjs/core';
//@ts-ignore
import * as compression from 'compression';
//@ts-ignore
import { xss } from 'express-xss-sanitizer';
import helmet from 'helmet';
//@ts-ignore
import * as hpp from 'hpp';
import { AppModule } from './app.module';

async function bootstrap() {
  const { PORT = 5000 } = process.env;
  const clientUrl = process.env.CLIENT_URL || ['http://localhost:3000'];

  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  app.enableCors({
    credentials: true,
    origin: clientUrl,
  });

  app.use(helmet(), hpp(), xss(), compression());

  await app.listen(PORT);
  console.log(`Server listening on port ${PORT}`);
}
bootstrap();
