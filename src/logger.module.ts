import { Module } from '@nestjs/common';
import { WistonLogger } from './logger';

@Module({
  providers: [WistonLogger],
  exports: [WistonLogger],
})
export class LoggerModule { }
