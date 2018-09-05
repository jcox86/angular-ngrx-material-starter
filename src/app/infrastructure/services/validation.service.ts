import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { of, Observable } from 'rxjs';

import { IValidationRules,
         ICurrentControlValidators,
         IValidator,
         IRequiredValidator,
         INumericRangeValidator,
         IMaxLengthValidator,
         IPatternValidator,
         INumericMinValueValidator,
         INumericMaxValueValidator,
         IDateMinValueValidator,
         IDateMaxValueValidator,
         IDateRangeValidator
      } from '@app/infrastructure/classes/interfaces/validation.models';
import { ControlValidators } from './control-validators.service';
import { ApiService } from '@app/infrastructure/core/api/api.service';

@Injectable()
export class ValidationService {

  // - Constructor -
  constructor(private api: ApiService) { }

  // FormGroup is one of the building blocks used in Reactive Forms.
  applyValidationRules(formGroup: FormGroup): Observable<any> {
    return of(() => {
      this.api.validation.getValidationRules().subscribe(rules => {
          this.addRulesToControls(formGroup, rules);
        });
    });
  }

  // This method is called after successfully receiving the JSON containing the rules for this form.
  private addRulesToControls(formGroup: FormGroup, validationRules: IValidationRules) {
    const controlValidators = [];
    if (validationRules && validationRules.properties) {
      for (const prop of validationRules.properties) {
        // Use the methods in class ControlValidators described above to create
        // an array of all validators for a field.
        const validatorArray = this.buildFieldValidators(prop.rules);
        if (validatorArray.length > 0) {
          const validators = this.applyValidatorToControl(formGroup, prop.fieldName, validatorArray, null);
          if (validators) {
            controlValidators.push(validators);
          }
        }
      }
    }
    // return the list of validators, so that the component could append more.
    return controlValidators;
  }

  // Given the list of rules from the JSON, return a list of the associated
  // TypeScript methods based on its type found in the ControlValidators class.
  private buildFieldValidators(rules: Array<IValidator>): any[] {
    const validatorArray: Array<any> = [];

    for (const rule of rules) {
      switch (rule.type) {
        case 'requiredValidator':
          validatorArray.push(ControlValidators.requiredValidator(
            (rule as IRequiredValidator).requiredValidator.errorMessage));
          break;
        case 'numericMinValueValidator':
          validatorArray.push(ControlValidators.minValueValidator(
            (rule as INumericMinValueValidator).numericMinValueValidator.minValue,
            (rule as INumericMinValueValidator).numericMinValueValidator.inclusive,
            (rule as INumericMinValueValidator).numericMinValueValidator.errorMessage));
          break;
        case 'numericMaxValueValidator':
          validatorArray.push(ControlValidators.maxValueValidator(
            (rule as INumericMaxValueValidator).numericMaxValueValidator.maxValue,
            (rule as INumericMaxValueValidator).numericMaxValueValidator.inclusive,
            (rule as INumericMaxValueValidator).numericMaxValueValidator.errorMessage));
          break;
        case 'numericRangeValidator':
          validatorArray.push(ControlValidators.numericRangeValidator(
            (rule as INumericRangeValidator).numericRangeValidator));
          break;
        case 'maxLengthValidator':
          validatorArray.push(ControlValidators.maxLengthValidator(
            (rule as IMaxLengthValidator).maxLengthValidator.maxLength,
            (rule as IMaxLengthValidator).maxLengthValidator.errorMessage));
          break;
        case 'dateMinValueValidator':
          validatorArray.push(ControlValidators.minDateValidator(
            (rule as IDateMinValueValidator).dateMinValueValidator.minDate,
            (rule as IDateMinValueValidator).dateMinValueValidator.errorMessage));
          break;
        case 'dateMaxValueValidator':
          validatorArray.push(ControlValidators.maxDateValidator(
            (rule as IDateMaxValueValidator).dateMaxValueValidator.maxDate,
            (rule as IDateMaxValueValidator).dateMaxValueValidator.errorMessage));
          break;
        case 'dateRangeValidator':
          validatorArray.push(ControlValidators.dateRangeValidator(
            (rule as IDateRangeValidator).dateRangeValidator));
          break;
        case 'patternValidator':
          validatorArray.push(ControlValidators.patternValidator(
            (rule as IPatternValidator).patternValidator.pattern,
            (rule as IPatternValidator).patternValidator.errorMessage));
          break;
      }
    }
    return validatorArray;
  }

  private applyValidatorToControl(formGroup: FormGroup, controlName: string, validatorArray: any[], currentValidators: Array<any>): ICurrentControlValidators {
    // Find the control within the FormGroup by name.
    // This is the reason that the name must match the field name in the JSON.
    const control = formGroup && formGroup.controls ? formGroup.controls[controlName] : null;
    if (control) {
      let validators = validatorArray;
      // First see if any validators have been added to this control already.
      if (currentValidators) {
        const currentValidator = currentValidators.find(item => {
          return item.control === control;
        });
        // If found, append this one to the list
        if (currentValidator) {
          validators = currentValidator.validators.concat(validatorArray);
        }
      }
      control.setValidators(validators);
      control.updateValueAndValidity(); // Trigger validation logic

      return {
        control: control,
        validators: validators
      };
    }
    return null;
  }
}
