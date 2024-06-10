import { Injectable, LoggerService } from "@nestjs/common";
import { createLogger, format, transports } from "winston";

const { combine, timestamp, json, errors, metadata, colorize, printf } = format;

const consoleFormat = printf(({ level, message, metadata }) => {
  return `[${metadata.context}] [${level}] ${message} ${metadata.trace ? JSON.stringify(metadata.trace) : ''}`;
});

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: combine(
    errors({ stack: true }),
    metadata(),
  ),
  transports: [
    new transports.Console({ format: combine(colorize(), consoleFormat) }),
    new transports.File({ filename: './logs/application.log', format: combine(timestamp(), json()) }),
  ],
});

@Injectable()
export class WistonLogger implements LoggerService {
  log(message: string, context?: string) {
    logger.info(message, { context });
  }
  error(message: string, trace: string) {
    logger.error(message, { trace });
  }
  warn(message: string) {
    logger.warn(message);
  }
  debug(message: string) {
    logger.debug(message);
  }
  verbose(message: string) {
    logger.verbose(message);
  }
}
