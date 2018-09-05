import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class ControlValidators {
  static requiredValidator = (errorMessage: string) => {
    return (control: AbstractControl) => {
      const val: string = control.value;
      if (val == null || val.length === 0) {
        return { requiredValidator: errorMessage };
      }
      return null;
    };
  }

  static minValueValidator = (min: number, inclusive: boolean, errorMessage: string) => {
    return (control: AbstractControl) => {
      if (control.value === null) {
        return null;
      }
      if (isNaN(control.value) || Number(control.value) < min || (!inclusive && Number(control.value) === min)) {
        return { minValueValidator: errorMessage };
      }
      return null;
    };
  }

  static maxValueValidator = (max: number, inclusive: boolean, errorMessage: string) => {
    return (control: AbstractControl) => {
      if (control.value === null) {
        return null;
      }
      if (isNaN(control.value) || Number(control.value) > max || (!inclusive && Number(control.value) === max)) {
        return { minValueValidator: errorMessage };
      }
      return null;
    };
  }

  static numericRangeValidator = (range: {
        minValue: number,
        maxValue: number,
        inclusive?: boolean,
        errorMessage?: string
    }) => {
    return (control: AbstractControl) => {
      if (control.value === null) {
        return null;
      }
      const num = +control.value;
      if (isNaN(control.value) || !(num <= range.maxValue && num >= range.minValue) || (!range.inclusive && (num === range.maxValue || num === range.minValue))) {
        return { rangeValueValidator: range.errorMessage };
      }
      return null;
    };
  }

  static maxLengthValidator = (maxLength: number, errorMessage: string) => {
    return (control: AbstractControl) => {
      if (control.value && control.value.length > maxLength) {
        return { maxLengthValidator: errorMessage };
      }
      return null;
    };
  }

  static minDateValidator = (minDate: Date, errorMessage: string) => {
    return (control: AbstractControl) => {
      if (control && control.value === null) {
        return null;
      }
      if (new Date(control.value) < minDate) {
        return { minDateValidator: errorMessage };
      }
      return null;
    };
  }

  static maxDateValidator = (maxDate: Date, errorMessage: string) => {
    return (control: AbstractControl) => {
      if (control && control.value === null) {
        return null;
      }
      if (new Date(control.value) > maxDate) {
        return { maxDateValidator: errorMessage };
      }
      return null;
    };
  }

  static dateRangeValidator = (range: {
      minDate: Date,
      maxDate: Date,
      inclusive?: boolean,
      errorMessage?: string
    }) => {
    return (control: AbstractControl) => {
      if (control.value === null) {
        return null;
      }
      const date = new Date(control.value);
      if (!(date <= range.maxDate && date >= range.minDate) || (!range.inclusive && (date === range.maxDate || date === range.minDate))) {
        return { dateRangeValidator: range.errorMessage };
      }
      return null;
    };
  }

  static patternValidator = (pattern: string, errorMessage: string) => {
    return (control: AbstractControl) => {
      if (control.value) {
        const regex = new RegExp(`^${pattern}$`);
        const value = control.value;
        if (!regex.test(value)) {
          return {
            patternValidator: errorMessage
          };
        }
      }
      return null;
    };
  }
}
