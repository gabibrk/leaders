import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';

@Injectable()
export class CheckIfQueryParms implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    if (Object.keys(request.query).length === 0) {
      throw new HttpException('No parameters provided', HttpStatus.BAD_REQUEST);
    }
    return next.handle();
  }
}