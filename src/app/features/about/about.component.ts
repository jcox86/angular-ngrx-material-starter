import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, AppState } from '@app/infrastructure/core';
import { ActionContextSideOpen } from '@app/infrastructure/navigation/navigation.actions';
import { Store } from '@ngrx/store';
import { LogService } from '@app/infrastructure/services/log.service';

@Component({
  selector: 'slo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // - Fields -
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  // - Ctor -
  constructor(private store: Store<AppState>, private log: LogService) {}

  // - OnInit -
  ngOnInit() {
    this.log.info('About component started');
  }

  // - Functions -
  openContextSide() {
    this.store.dispatch(new ActionContextSideOpen());
  }
}
