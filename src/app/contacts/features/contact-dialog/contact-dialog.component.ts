import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Validators
import { ErrorValidator } from '@app-shared/form/validators/error-validators';
import { Router } from '@angular/router';
import { MAIN_APP_ROUTES } from 'app/routes';

@Component({
    selector: 'contact-dialog',
    templateUrl: './contact-dialog.component.html',
    styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnDestroy{
    public contactForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.maxLength(50), ErrorValidator.onlyLetters()]),
        lastName: new FormControl('', [Validators.required, ErrorValidator.onlyLetters()]),
        phoneNumber: new FormControl('', [Validators.required, ErrorValidator.phoneNumberValidator()]),
        email: new FormControl('', [Validators.required, ErrorValidator.emailValidator()]),
    });

    constructor(@Inject(MAT_DIALOG_DATA) public data, private router: Router) {  }

    public onSubmit(): void {
        console.log('onSubmit()');
    }


    ngOnDestroy() {
        this.router.navigate([MAIN_APP_ROUTES.CONTACTS]);
    }
}
