import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationNumberMinService {
  constructor() { }

  validateMinValue(min: number) {
    return (control: FormControl) => {
      const num = Number(control.value);
      if (isNaN(num) || num < min) {
        return {
          minValue: { valid: false },
        };
      }
      return null;
    };
  }
}
