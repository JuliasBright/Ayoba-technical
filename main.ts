import { NestFactory } from '@nestjs/core';
import { connect } from './database';
import { AppModule } from './ayoba-technical.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwtAuthGuard());
  await connect();
  await app.listen(3000);
}
bootstrap();
