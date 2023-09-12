import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const msg =
      exception instanceof HttpException ? exception.getResponse() : exception;

    if (status === HttpStatus.UNAUTHORIZED) {
      // Manejar errores de autenticación de forma específica
      this.logger.error(`Authentication Error: ${JSON.stringify(msg)}`);
      response.status(status).json({
        time: new Date().toISOString(),
        path: request.url,
        error: 'Authentication Error',
        message: msg,
      });
    } else {
      // Manejar otros errores
      this.logger.error(`Status: ${status} Error: ${JSON.stringify(msg)}`);
      response.status(status).json({
        time: new Date().toISOString(),
        path: request.url,
        error: msg,
      });
    }
  }
}
