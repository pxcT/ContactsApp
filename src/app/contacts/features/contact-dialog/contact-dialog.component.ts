import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'contact-dialog',
    templateUrl: './contact-dialog.component.html',
    styleUrls:['./contact-dialog.component.scss']
})
export class ContactDialogComponent {
    public contactForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
    });

    constructor(@Inject(MAT_DIALOG_DATA) public data) { }

    public onSubmit(): void {
        console.log('onSubmit()');
    }
}