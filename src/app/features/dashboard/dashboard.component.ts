import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DxDataGridComponent } from 'devextreme-angular';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/infrastructure/core';
import { MessageService } from '@app/infrastructure/services/message.service';
import { LogService } from '@app/infrastructure/services/log.service';
import { ApiService } from '@app/infrastructure/core/api/api.service';
import { PagedRequest } from '@app/infrastructure/classes/interfaces/paged-request';

@Component({
  selector: 'slo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  // - Bindings -
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  @ViewChild(DxDataGridComponent) private dataGrid: DxDataGridComponent;

  // - Fields (Define template properties here) -
  public data: any;
  public isLoading = false;
  public buttonOptions: any;
  public popupPosition: any;
  public showHeaderFilter: boolean;
  public showFilterRow: boolean;
  public applyFilterTypes: any;
  public currentFilter: any;

  // - Constructor (Inject Services here) -
  constructor(private messageService: MessageService, private log: LogService, private api: ApiService, private router: Router) { }

  // - OnInit (Call setup/data/subscribers functions here) -
  ngOnInit() {
    this.pageSetup(); // Set up the template properties
    this.loadGridData();
  }

  // - Functions -
  navigateToCreate() {
    this.router.navigateByUrl('/create');
  }

  pageSetup() {
    this.buttonOptions = {
      text: 'Create',
      type: 'default',
      icon: 'plus'
    };
    this.popupPosition = {
      of: window,
      at: 'top',
      my: 'top',
      offset: { y: 10 }
    };
    this.showHeaderFilter = true;
    this.showFilterRow = true;
    this.applyFilterTypes = [
      {
        key: 'auto',
        name: 'Immediately'
      },
      {
        key: 'onClick',
        name: 'On Button Click'
      }
    ];
    this.currentFilter = this.applyFilterTypes[0].key;
  }

  loadGridData() {
    this.isLoading = true;
    const payload: PagedRequest = {
      ...{ page: this.dataGrid.paging.pageIndex },
      ...{ pageSize: this.dataGrid.paging.pageSize }
    };
    // this.api.requests.postGetRequests(payload).subscribe(response => {
    //   response.items.forEach(element => {
    //     element.submittedOn = new Date(element.submittedOn);
    //   });
    //   this.data = response.items;
    // });
    this.log.info('Grid Data Loaded from server');
    this.isLoading = false;
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}
