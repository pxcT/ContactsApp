import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Validators
import { ErrorValidator } from '@app-shared/form/validators/error-validators';
import { MAIN_APP_ROUTES } from 'app/routes';
import { CONTACT_ROUTE_ACTIONS } from '@app-contacts/contact-route-actions';
import { UserModel } from '@app-contacts/models/user.model';
import { ContactsService } from '@app-contacts/services/contacts.service';

@Component({
    selector: 'contact-dialog',
    templateUrl: './contact-dialog.component.html',
    styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit, OnDestroy {
    public contactForm: FormGroup;
    private contact: UserModel;
    private dialogRef: MatDialog;

    constructor(@Inject(MAT_DIALOG_DATA) public data, private router: Router, private formBuilder: FormBuilder, private contactsService: ContactsService) {
        this.contact = this.data && this.data.contact ? this.data.contact : null;
        this.dialogRef = this.data.dialogRef;

        this.contactForm = this.formBuilder.group({
            firstName: [this.contact ? this.contact.firstName : '', [Validators.required, Validators.maxLength(50), ErrorValidator.onlyLetters()]],
            lastName: [this.contact ? this.contact.lastName : '', [Validators.required, ErrorValidator.onlyLetters()]],
            phoneNumber: [this.contact ? this.contact.phoneNumber : '', [Validators.required, ErrorValidator.phoneNumberValidator()]],
            email: [this.contact ? this.contact.email : '', [Validators.required, ErrorValidator.emailValidator()]]
        });
    }

    ngOnInit() { }

    public delete(): void {
        this.contactsService.deleteContact(this.contact.id);
        this.closeAndNavigate();
    }

    public onSubmit(): void {
        if (this.data.action === CONTACT_ROUTE_ACTIONS.EDIT) {
            this.update();
        } else {
            this.create();
        }
    }

    private update(): void {
        const user = this.getFormData();
        user.id = this.contact.id;
        this.contactsService.updateContact(user);
        this.closeAndNavigate();
    }

    private getFormData(): UserModel {
        const { firstName, lastName, phoneNumber, email } = this.contactForm.controls;
        const formValues = { firstName: firstName.value, lastName: lastName.value, phoneNumber: phoneNumber.value, email: email.value };
        console.log('formValues', formValues);
        const user = new UserModel(formValues);
        return user;
    }

    private create(): void {
        const user = this.getFormData();
        this.contactsService.addContact(user);
        this.closeAndNavigate();
    }

    private closeAndNavigate(): void {
        this.dialogRef.closeAll();
        this.navigateToContacts();
    }

    private navigateToContacts(): void {
        this.router.navigate([MAIN_APP_ROUTES.CONTACTS]);        
    }

    ngOnDestroy() {
        this.navigateToContacts();
    }
}
