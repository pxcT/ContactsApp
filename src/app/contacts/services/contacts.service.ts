import { Injectable } from '@angular/core';

// Models
import { UserModel } from '@app-contacts/models/user.model';

// Dummy Data
import { CONTACTS } from './dummy-data';

@Injectable()
export class ContactsService {
    private contacts = CONTACTS;

    constructor() { }
    
    public getContactById(id: number): UserModel {
        return this.contacts.find((element: UserModel) => element.id === id);
    }

    public getContacts(): UserModel[] {
        return this.contacts;
    }
}