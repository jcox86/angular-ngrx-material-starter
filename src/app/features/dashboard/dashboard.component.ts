import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/infrastructure/core';
import { MessageService } from '@app/infrastructure/services/message.service';
import { LogService } from '@app/infrastructure/services/log.service';
import { ApiService } from '@app/infrastructure/core/api/api.service';

@Component({
  selector: 'slo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  logHistory: any;

  constructor(private messageService: MessageService, private log: LogService, private api: ApiService) { }

  ngOnInit() {
    setTimeout(() => this.messageService.showToastSuccess({'header': 'Welcome', 'description': 'Welcome to the SLO Starter Seed'}));
    this.logHistory = this.log.logHistory;
   }

  traceService() {
    this.log.trace('TRACE');
  }

  debugService() {
    this.log.debug('DEBUG');
  }

  infoService() {
    this.log.info('INFO');
  }

  warnService() {
    this.log.warn('WARN');
  }

  errorService() {
    this.log.error('ERROR TEST');
  }

  callApi() {
    this.api.app.getCurrentUser();
  }
}
