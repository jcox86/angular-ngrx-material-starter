import { Injectable, Injector } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { NGXLogger, NgxLoggerLevel } from 'ngx-logger';
import * as moment from 'moment';

import { environment as env } from '@env/environment';
import { ILog, Log } from '@app/infrastructure/classes/interfaces/log';

@Injectable()
export class LogService {
  public logHistory: Log[] = []; // TODO: Keep this in the store
  private logLimit: Number = 20; // TODO: Get from DB and keep in store

  constructor(private log: NGXLogger,
              private injector: Injector) { } // TODO: Bring in store here

  public trace(trace) {
    this.log.trace(trace || 'TRACE');
    this.saveToLogHistory(trace, NgxLoggerLevel.TRACE);
  }

  public debug(debug) {
    this.log.debug(debug || 'DEBUG');
    this.saveToLogHistory(debug, NgxLoggerLevel.DEBUG);
  }

  public info(info) {
    this.log.info(info || 'INFO');
    this.saveToLogHistory(info, NgxLoggerLevel.INFO);
  }

  public warn(warn) {
    this.log.warn(warn || 'WARN');
    this.saveToLogHistory(warn, NgxLoggerLevel.WARN);
  }

  public error(error) {
    this.log.error(error && error.message || 'ERROR');
    this.saveToLogHistory(error, NgxLoggerLevel.ERROR);
  }

  private saveToLogHistory(error, level: NgxLoggerLevel) {
    const logToSend: Log = new Log;

    logToSend.appId = `${env.appName}_${env.envName}`;
    // errorToSend.user = this.store.currentUser;
    logToSend.name = error.name || null;
    logToSend.timestamp = moment().toISOString();
    const location = this.injector.get(LocationStrategy);
    logToSend.url = location.href;
    logToSend.location = '';
    logToSend.scope = typeof error === 'string'
      ? 'LOG ONLY'
      : error instanceof HttpErrorResponse
        ? 'API'
        : error.ngDebugContext.component.constructor.name;

    switch (level) {
      case NgxLoggerLevel.TRACE:
        logToSend.level = loglevel.TRACE;
        break;
      case NgxLoggerLevel.DEBUG:
        logToSend.level = loglevel.DEBUG;
        break;
      case NgxLoggerLevel.INFO:
        logToSend.level = loglevel.INFO;
        break;
      case NgxLoggerLevel.WARN:
        logToSend.level = loglevel.WARN;
        break;
      case NgxLoggerLevel.ERROR:
        logToSend.level = loglevel.ERROR;
        break;
      case NgxLoggerLevel.OFF:
        logToSend.level = loglevel.OFF;
        break;
      default:
        break;
    }
    logToSend.message = error.message || error.toString();
    logToSend.stack = error instanceof HttpErrorResponse
      ? null
      : typeof error === 'string'
        ? JSON.stringify(error)
        : error.stack;

    this.updateUserLogHistory(logToSend);
    return logToSend;
  }

  private updateUserLogHistory(item: ILog): void {
    const currentLogLength = this.logHistory.length;
    if (currentLogLength >= this.logLimit) {
      this.logHistory.shift();
    }
    this.logHistory.push(item);
    // this.store.update(this.userLog); // TODO: Update store with new user log
  }
}

enum loglevel {
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  OFF = 'OFF'
}
