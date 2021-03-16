import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { CustomLogger } from './common/logger/customLogger';
import * as helmet from 'helmet';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  const systemConfig: ConfigService = app.get(ConfigService);
  const logger: CustomLogger = app.get(CustomLogger);
  await app.listen(systemConfig.get<number>('system.SERVER_PORT'), ()=>{
    logger.log(`API running in '${systemConfig.get<number>('system.NODE_ENV')}' environment`,'AppConfiguration')
    logger.log(`API running on port ${systemConfig.get<number>('system.SERVER_PORT')}`,'AppConfiguration')
  });
}
bootstrap();
