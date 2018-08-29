import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { Constants } from '../../utils/constants';

@Injectable()
export class ValidationPhoneService {
  static validPhoneNumber(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'invalidPhone': 'Phone number is required.' } : null;
      }
      const strippedValue = control.value.replace(Constants.patterns.NON_DECIMAL_DIGITS, '');
      if (!Constants.patterns.PHONE_REGEX.test(strippedValue)) {
        return { 'invalidPhone': 'Phone number is invalid.' };
      }

      return null;
    };
  }

  static validPhoneNumberConfirm(phoneControlName: string, confirmPhoneControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const phoneValue = control.get(phoneControlName).value;
      const confirmPhoneValue = control.get(confirmPhoneControlName).value;

      if (phoneValue !== confirmPhoneValue) {
        control.get(confirmPhoneControlName).setErrors({ 'phoneMismatched': 'Phone Number fields do not match.' });
      }

      return null;
    };
  }
}
