import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { Constants } from '../../utils/constants';

export class ValidationZipcodeService {
  static validZipcode(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { 'noValidZip': 'Zip Code is required.' } : null;
      }
      if (!Constants.patterns.ZIPCODE_FULL_REGEX.test(control.value)) {
        return { 'noValidZip': 'Zip Code is invalid.' };
      }
      return null;
    };
  }
}
