import { Injectable, Injector } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { confirm } from 'devextreme/ui/dialog';
import { alert } from 'devextreme/ui/dialog';
import { custom } from 'devextreme/ui/dialog';

import { IToast } from '../classes/interfaces/toast';
import { IDialog } from '@app/infrastructure/classes/interfaces/dialog';

@Injectable()
export class MessageService {

  constructor(private injector: Injector) { }

  private get toastr(): ToastrService {
    return this.injector.get(ToastrService);
  }

  showToastSuccess(params: IToast): void {
    setTimeout(() => this.toastr.success(params.description, params.header));
  }

  showToastError(params: IToast): void {
    setTimeout(() => this.toastr.error(params.description, params.header, { timeOut: 10000 }));
  }

  showToastWarning(params: IToast): void {
    setTimeout(() => this.toastr.warning(params.description, params.header));
  }

  showToastInfo(params: IToast): void {
    setTimeout(() => this.toastr.info(params.description, params.header));
  }

  showToastWarnLogout(params: IToast): Observable<any> {
    return of(this.toastr.warning(params.description, params.header));
  }

  showToastLoggedOut(params: IToast): Observable<any> {
    return of(this.toastr.error(params.description, params.header));
  }

  showConfirm(params: IDialog): Promise<boolean> {
    const confirmation = confirm(params.message || 'Are you sure?', params.title);
    return confirmation.then((dialogResult) => {
      return dialogResult;
    });
  }

  showAlert(params: IDialog): Promise<void> {
    const alertBox = alert(params.message, params.title);
    return alertBox.then();
  }

  showCustom(params: IDialog): Object {
    const myDialog = custom({
      title: params.title,
      message: params.message,
      showTitle: params.showTitle,
      buttons: []
    });
    params.buttons.forEach(element => {
      myDialog.buttons.push(element);
    });
    myDialog.show().done(function(dialogResult) {
        return dialogResult;
    });
    return myDialog;
  }

  clearToasts(): void {
    this.toastr.clear();
  }
}
