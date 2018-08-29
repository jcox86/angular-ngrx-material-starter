import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import * as moment from 'moment';

@Injectable()
export class ValidationDateService {

  static validDate(control) {
    if (!control.value) {
      return { 'noValidDate': 'Date is required.' };
    }
    const value = control.value.toISOString();
    if (value.indexOf('T') === -1) {
      return { 'noValidDate': 'Date is invalid.' };
    }
    return null;
  }

  static dateNotInFuture(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'date': 'Date of Birth is required.' } : null;
      }
      const date1 = control.value;
      const date2 = moment().toISOString();

      if (date1 !== null && date2 !== null && moment(date1).toISOString() > date2) {
        return { 'date': 'Date of Birth is invalid.' };
      }
      return null;
    };
  }

  static validateDateRange(minDate?: Date, maxDate?: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) { return null; }

      const formattedDateInput = moment(control.value).format('YYYY-MM-DD');

      if (formattedDateInput !== null && minDate !== null) {
        const formattedMinDate = moment(minDate).format('YYYY-MM-DD');

        if (moment(formattedDateInput).isBefore(formattedMinDate)) { return { 'date': 'Date is outside of range.' }; }
      }

      if (formattedDateInput !== null && maxDate !== null) {
        const formattedMaxDate = moment(maxDate).format('YYYY-MM-DD');

        if (moment(formattedDateInput).isAfter(formattedMaxDate)) { return { 'date': 'Date is outside of range.' }; }
      }
      return null;
    };
  }
}
