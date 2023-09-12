import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AllExceptionFilter } from './common/filters/http-exception';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.development'], isGlobal: true }),
    AllExceptionFilter,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
