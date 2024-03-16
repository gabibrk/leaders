import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [UsersModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
