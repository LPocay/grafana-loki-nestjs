import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private emtpyFunction: any;

  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }

  failingMethod(): string {
    return this.emtpyFunction();  // This will throw an error
  }
}
