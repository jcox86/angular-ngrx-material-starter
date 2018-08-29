import { Injectable } from '@angular/core';
import { ValidationEmailService } from './validation-email.service';
import { ValidationPhoneService } from './validation-phone.service';
import { ValidationZipcodeService } from './validation-zipcode.service';
import { ValidationDateService } from './validation-date.service';
import { ValidationNumericService } from './validation-numeric.service';
import { ValidationIsDirtyService } from './validation-is-dirty.service';
import { ValidationNumberMaxService } from './validation-number-max.service';
import { ValidationNumberMinService } from './validation-number-min.service';

@Injectable()
export class ValidationService {
  constructor(
    public email: ValidationEmailService,
    public phone: ValidationPhoneService,
    public zipcode: ValidationZipcodeService,
    public datePicker: ValidationDateService,
    public numeric: ValidationNumericService,
    public isDirty: ValidationIsDirtyService,
    public maxNumber: ValidationNumberMaxService,
    public minNumber: ValidationNumberMinService,
  ) { }
}
