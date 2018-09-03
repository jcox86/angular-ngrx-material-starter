import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { shareReplay } from 'rxjs/operators';

import { environment as env } from '@env/environment';
import { LogService } from '@app/infrastructure/services/log.service';

type headerProp = 'none'; // ******Define header properties here******

interface EndpointConfig {
  route: string;
  headers: {
    get?: string;
    post?: string;
    put?: string;
    delete?: string;
  };
}

@Injectable()
export class ApiEndpoint {
  public url: string = env.apiRoute;
  public config: EndpointConfig;
  public getAction;
  public postAction;
  public putAction;
  public deleteAction;
  public getError;
  public postError;
  public putError;
  public deleteError;

  constructor(public http: HttpClient, private log: LogService) { }

  initialize(config: EndpointConfig) {
    this.config = config;
  }

  post(payload: any, paramRoute?, paramHeader?) {
    const headers = this.prepareHeader(paramHeader || this.config.headers.post);
    const route = paramRoute || this.config.route;

    const apiRequest = {
      route: this.config.route,
      payload,
      type: 'POST',
      headers: headers,
      response: null,
      status: null,
    };
    const finalEndpoint = `${this.url}${route}`;
    const subscription = this.http.post(finalEndpoint, payload, headers).pipe(shareReplay());
    this.log.trace({ name: 'HTTP Request', scope: 'HTTP', message: `${apiRequest.type}: ${finalEndpoint}`, stack: payload});

    subscription.subscribe(
      response => {
        apiRequest.response = response;
        apiRequest.status = response;
      }
    );
    return subscription;
  }

  put(payload: any, paramRoute?, paramHeader?) {
    const headers = this.prepareHeader(paramHeader || this.config.headers.put);
    const route = paramRoute || this.config.route;

    const apiRequest = {
      route: this.config.route,
      payload,
      type: 'PUT',
      headers: headers,
      response: null,
      status: null,
    };
    const finalEndpoint = `${this.url}${route}`;
    const subscription = this.http.put(finalEndpoint, payload, headers).pipe(shareReplay());
    this.log.trace({ name: 'HTTP Request', scope: 'HTTP', message: `${apiRequest.type}: ${finalEndpoint}`, stack: payload});

    subscription.subscribe(
      response => {
        apiRequest.response = response;
        apiRequest.status = response;
      }
    );
    return subscription;
  }

  delete(paramRoute?, paramHeader?) {
    const headers = this.prepareHeader(paramHeader || this.config.headers.delete);
    const route = paramRoute || this.config.route;

    const apiRequest = {
      route: this.config.route,
      type: 'DELETE',
      headers: headers,
      response: null,
      status: null,
    };
    const finalEndpoint = `${this.url}${route}`;
    const subscription = this.http.delete(finalEndpoint, headers).pipe(shareReplay());
    this.log.trace({ name: 'HTTP Request', scope: 'HTTP', message: `${apiRequest.type}: ${finalEndpoint}`});

    subscription.subscribe(
      response => {
        apiRequest.response = response;
        apiRequest.status = response;
      }
    );
    return subscription;
  }

  get(paramRoute?, paramHeader?) {
    const headers = this.prepareHeader(paramHeader || this.config.headers.get);
    const route = paramRoute || this.config.route;

    const apiRequest = {
      route,
      payload: {},
      type: 'GET',
      headers: headers,
      response: null,
      status: null,
    };
    const finalEndpoint = `${this.url}${route}`;
    const subscription = this.http.get(finalEndpoint, headers).pipe(shareReplay());
    this.log.trace({ name: 'HTTP Request', scope: 'HTTP', message: `${apiRequest.type}: ${finalEndpoint}`});

    subscription.subscribe(
      response => {
        try {
          apiRequest.response = response;
        } catch (e) {
          apiRequest.response = null;
        }
        apiRequest.status = response;
      }
    );
    return subscription;
  }

  private prepareHeader(headerType: headerProp): object {
    let headers = new HttpHeaders();

    if (headerType === 'none') {
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Accept', '*/*');
    }

    // if (headerType === 'getValidateHeaders') {
    // 	headers = headers.set('Authorization', `Token ${this.session.token}`);
    // 	headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
    // }

    return {
      headers,
    };
  }
}
