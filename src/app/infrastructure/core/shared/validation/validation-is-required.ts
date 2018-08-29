import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class ValidationIsRequired {
  static isRequired(placeholder: string = 'This field'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value && control.value !== 0) {
        return { 'isRequired': `${placeholder} is required.` };
      }

      return null;
    };
  }
}
