import { AbstractControl, ValidatorFn } from '@angular/forms';

export type validationType =
  | 'requiredValidator'
  | 'numericMinValueValidator'
  | 'numericMaxValueValidator'
  | 'maxLengthValidator'
  | 'numericRangeValidator'
  | 'dateMinValueValidator'
  | 'dateMaxValueValidator'
  | 'dateRangeValidator'
  | 'patternValidator';

export interface IValidationRules {
  properties: Array<{
    fieldName: string,
    rules: Array<IValidator>
  }>;
}

export interface IValidator {
  type: validationType;
}

export interface IRequiredValidator extends IValidator {
  type: 'requiredValidator';
  requiredValidator: {
    errorMessage: string
  };
}

export interface INumericMinValueValidator extends IValidator {
  type: 'numericMinValueValidator';
  numericMinValueValidator: {
    minValue: number,
    inclusive: boolean,
    errorMessage: string
  };
}

export interface INumericMaxValueValidator extends IValidator {
  type: 'numericMaxValueValidator';
  numericMaxValueValidator: {
    maxValue: number,
    inclusive: boolean,
    errorMessage: string
  };
}

export interface IMaxLengthValidator extends IValidator {
  type: 'maxLengthValidator';
  maxLengthValidator: {
    maxLength: number,
    errorMessage: string
  };
}

export interface INumericRangeValidator extends IValidator {
  type: 'numericRangeValidator';
  numericRangeValidator: {
    minValue: number,
    maxValue: number,
    inclusive: boolean,
    errorMessage: string
  };
}

export interface IDateMinValueValidator extends IValidator {
  type: 'dateMinValueValidator';
  dateMinValueValidator: {
    minDate: Date,
    errorMessage: string
  };
}

export interface IDateMaxValueValidator extends IValidator {
  type: 'dateMaxValueValidator';
  dateMaxValueValidator: {
    maxDate: Date,
    errorMessage: string
  };
}

export interface IDateRangeValidator extends IValidator {
  type: 'dateRangeValidator';
  dateRangeValidator: {
    minDate: Date,
    maxDate: Date,
    inclusive: boolean,
    errorMessage: string
  };
}

export interface IPatternValidator extends IValidator {
  type: 'patternValidator';
  patternValidator: {
    pattern: string,
    errorMessage: string
  };
}

export interface ICurrentControlValidators {
  control: AbstractControl;
  validators: Array<IValidator>;
}
