import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { IToast } from '../classes/interfaces/toast';

@Injectable()
export class MessageService {
  constructor(public toastr: ToastrService) {}

  showToastSuccess(params: IToast): void {
    this.toastr.success(params.description, params.header);
  }

  showToastError(params: IToast): void {
    this.toastr.error(params.description, params.header, { timeOut: 10000 });
  }

  showToastWarning(params: IToast): void {
    this.toastr.warning(params.description, params.header);
  }

  showToastInfo(params: IToast): void {
    this.toastr.info(params.description, params.header);
  }

  showToastWarnLogout(params: IToast): Observable<any> {
    return of(this.toastr.warning(params.description, params.header));
  }

  showToastLoggedOut(params: IToast): Observable<any> {
    return of(this.toastr.error(params.description, params.header));
  }

  clearToasts(): void {
    this.toastr.clear();
  }
}
