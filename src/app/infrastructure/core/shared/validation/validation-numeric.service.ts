import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { Constants } from '../../utils/constants';

@Injectable()
export class ValidationNumericService {
  static currency(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'invalidCurrency': 'Amount is required.' } : null;
      }
      if (!Constants.patterns.CURRENCY_REGEX.test(control.value)) {
        return { 'invalidCurrency': 'Amount is invalid.' };
      }
      return null;
    };
  }

  static weight(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'invalidWeight': 'Weight is required.' } : null;
      }
      if (control.value < 1 || control.value > 999) {
        return { 'invalidWeight': 'Weight is invalid.' };
      }
      return null;
    };
  }

  numbersOnly(control: AbstractControl) {
    const DIGITS_ONLY_REGEX: RegExp = /^\d+$/;
    if (control.value && !DIGITS_ONLY_REGEX.test(control.value)) {
      control.setValue(control.value.replace(/[^0-9.]/g, ''));
    }
    return null;
  }
}
