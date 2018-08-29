import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationNumberMaxService {
  constructor() { }

  validateMaxValue(max: number) {
    return (control: FormControl) => {
      const num = Number(control.value);
      if (isNaN(num) || num > max) {
        return {
          maxValue: { valid: false },
        };
      }
      return null;
    };
  }
}
