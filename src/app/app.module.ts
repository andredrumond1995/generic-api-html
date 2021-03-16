import { Module } from '@nestjs/common';
import { HttpExceptionFilterProvider } from '../common/filters/http-exception.filter';
import { DataResponseInterceptorProvider } from '../common/interceptors/data.response.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import sysEnvs from '../envs/system.envs';
import servicesEnvs from '../envs/request.envs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomLogger } from '../common/logger/customLogger';
import { UtilsService } from '../utils/utils.service';
import { AppService } from './app.service';
import { LoggingInterceptorProvider } from '../common/interceptors/logging.interceptor';
import { AppController } from './app.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env-files/.config.${(process.env.NODE_ENV ||
        'development') as string}.env`,
      load: [sysEnvs, servicesEnvs],
    }),
    CustomLogger,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CustomLogger,
    UtilsService,
    LoggingInterceptorProvider,
    HttpExceptionFilterProvider,
    DataResponseInterceptorProvider,
  ],
})
export class AppModule {}
