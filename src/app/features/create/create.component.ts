import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DxFormComponent } from 'devextreme-angular';

import { ROUTE_ANIMATIONS_ELEMENTS, AppState } from '@app/infrastructure/core';
import { ActionContextSideOpen } from '@app/infrastructure/navigation/navigation.actions';
import { LogService } from '@app/infrastructure/services/log.service';
import { MessageService } from '@app/infrastructure/services/message.service';

@Component({
  selector: 'slo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  // - Bindings -
  @ViewChild(DxFormComponent) form: DxFormComponent;

  // - Fields -
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  public createClone: any;

  // - Ctor -
  constructor(private store: Store<AppState>, private log: LogService, private message: MessageService) {}

  // - OnInit -
  ngOnInit() {}

  canDeactivate(): Observable<boolean> | boolean | Promise<boolean> {
    // Allow synchronous navigation (`true`) if nothing is unchanged
    let notPristine: boolean;
    if (this.createClone !== null && this.form && this.form.formData !== null) {
      notPristine = Object.keys(this.form.formData).map(key => this.createClone[key] !== this.form.formData[key]).reduce((a, b) => a || b, false);
    }
    if (notPristine) {
      return this.message.showConfirm({title: 'Confirm Cancel', message: 'Are you sure you wish to cancel this Create?'});
    }
    return !notPristine;
  }

  // - Functions -
  openContextSide() {
    this.store.dispatch(new ActionContextSideOpen());
  }
}
