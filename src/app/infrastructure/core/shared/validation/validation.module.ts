import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationService } from './validation.service';
import { ValidationEmailService } from './validation-email.service';
import { ValidationPhoneService } from './validation-phone.service';
import { ValidationZipcodeService } from './validation-zipcode.service';
import { ValidationDateService } from './validation-date.service';
import { ValidationNumericService } from './validation-numeric.service';
import { ValidationIsDirtyService } from './validation-is-dirty.service';
import { ValidationNumberMinService } from './validation-number-min.service';
import { ValidationNumberMaxService } from './validation-number-max.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    ValidationService,
    ValidationEmailService,
    ValidationPhoneService,
    ValidationZipcodeService,
    ValidationDateService,
    ValidationNumericService,
    ValidationIsDirtyService,
    ValidationNumberMinService,
    ValidationNumberMaxService,
  ],
})
export class SharedValidationModule { }
