import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class ErrorValidator {
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
    static onlyLetters(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) {
                return null;
            }

            const regEx = /^[a-zA-Z ]*$/;

            if (!regEx.test(control.value)) {
                return { onlyLetters: true };
            }

            return null;
        };
    }

    static phoneNumberValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) {
                return null;
            }

            const regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

            if (!regEx.test(control.value)) {
                return { phoneNumber: true };
            }

            return null;
        };
    }

    static emailValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) {
                return null;
            }

            const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!regEx.test(control.value)) {
                return { email: true };
            }

            return null;
        };
    }


}
