import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as fs from 'fs';
var path = require('path');

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/secrets/private.key'), 
    cert: fs.readFileSync(__dirname + '/secrets/certificate.crt'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
