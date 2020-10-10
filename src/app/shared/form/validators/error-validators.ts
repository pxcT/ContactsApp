import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class ErrorValidator {
    static minDateValidator(date: Date): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value === null) {
                return null;
            }

            if (control.value < date) {
                return { minDate: true };
            }

            return null;
        };
    }

    static minInputValue(value: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value === null) {
                return null;
            }

            if (control.value < value) {
                return { minValue: true };
            }

            return null;
        };
    }

    static onlyNumbers(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) {
                return null;
            }

            const regEx = /^[0-9]*$/;

            if (!regEx.test(control.value)) {
                return { onlyNumbers: true };
            }

            return null;
        };
    }
}
