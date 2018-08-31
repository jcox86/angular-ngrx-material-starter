import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { shareReplay } from 'rxjs/operators';

import { environment as env } from '@env/environment';

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

  constructor(public http: HttpClient) { }

  initialize(config: EndpointConfig) {
    this.config = config;
  }

  post(payload: any, paramRoute?, paramHeader?) {
    const headers = this.prepareHeader(paramHeader || this.config.headers.post);
    const route = paramRoute || this.config.route;

    const apiRequest = {
      route: this.config.route,
      payload,
      type: 'post',
      headers: headers,
      response: null,
      status: null,
    };
    const subscription = this.http.post(`${this.url}${route}`, payload, headers).pipe(shareReplay());

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
      type: 'put',
      headers: headers,
      response: null,
      status: null,
    };
    const subscription = this.http.put(`${this.url}${route}`, payload, headers).pipe(shareReplay());

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
      type: 'delete',
      headers: headers,
      response: null,
      status: null,
    };
    const subscription = this.http.delete(`${this.url}${route}`, headers).pipe(shareReplay());

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
      type: 'get',
      headers: headers,
      response: null,
      status: null,
    };
    const finalRoute = `${this.url}${route}`;
    const subscription = this.http.get(finalRoute, headers).pipe(shareReplay());

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
