import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CheckIfQueryParms } from './services/header.interceptor';

@Module({
  providers: [
    UsersService,
    CheckIfQueryParms
  ],
  exports: [CheckIfQueryParms],
  controllers: [UsersController],
  imports: [HttpModule]
})
export class UsersModule { }
