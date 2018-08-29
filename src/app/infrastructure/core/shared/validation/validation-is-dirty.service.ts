import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationIsDirtyService {
  constructor() { }

  validateDirty(control: FormControl) {
    if (control.pristine) {
      return {
        isDirty: { valid: false },
      };
    }
    return null;
  }
}
