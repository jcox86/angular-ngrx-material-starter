import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { LogService } from '@app/infrastructure/services/log.service';

@Injectable()
export class RouterResolver implements Resolve<any> {
  constructor(private router: Router, private log: LogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.log.trace(`Navigated to ${route.routeConfig.component.name}`);
    return timer(1);
  }
}
