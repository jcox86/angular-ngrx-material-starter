export interface ILog {
  name: string;
  appId: string;
  user: string;
  timestamp: string;
  location: string;
  url: string;
  level: string;
  scope: string;
  message: string;
  stack: string;
}

export class Log implements ILog {
  name: string;
  appId: string;
  user: string;
  timestamp: string;
  location: string;
  url: string;
  level: string;
  scope: string;
  message: string;
  stack: string;
  constructor() {
    this.name = '';
    this.appId = '';
    this.user = '';
    this.timestamp = '';
    this.location = '';
    this.url = '';
    this.scope = '';
    this.level = '';
    this.message = '';
    this.stack = '';
  }
}
