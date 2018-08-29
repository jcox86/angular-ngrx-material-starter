import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Constants } from '../../utils/constants';

@Injectable()
export class ValidationEmailService {
  static validEmail(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'incorrectMailFormat': 'Email is required.' } : null;
      }
      if (control.value.length < 4) {
        return { 'incorrectMailFormat': 'Please enter a valid email.' };
      }
      if (control.value.indexOf('.') === -1) {
        return { 'incorrectMailFormat': 'Please enter a valid email.' };
      }
      if (control.value.split('.')[1].length < 1) {
        return { 'incorrectMailFormat': 'Please enter a valid email.' };
      }
      if (!Constants.patterns.EMAIL_REGEX.test(control.value)) {
        return { 'incorrectMailFormat': 'Please enter a valid email.' };
      }

      return null;
    };
  }

  static validEmailConfirm(emailControlName: string, confirmEmailControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailValue = control.get(emailControlName).value;
      const confirmEmailValue = control.get(confirmEmailControlName).value;

      if (!confirmEmailValue) {
        control.get(confirmEmailControlName).setErrors({ 'incorrectMailFormat': 'Confirm Email is required.' });
      }

      if (emailValue !== confirmEmailValue) {
        control.get(confirmEmailControlName).setErrors({ 'emailMismatched': 'Email fields do not match.' });
      }

      return null;
    };
  }
}
