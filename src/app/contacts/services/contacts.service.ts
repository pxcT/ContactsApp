import { Injectable } from '@angular/core';

// Models
import { UserModel } from '@app-contacts/models/user.model';
import { Subject } from 'rxjs';

// Dummy Data
import { CONTACTS } from './dummy-data';

@Injectable()
export class ContactsService {
    private contacts = CONTACTS;

    private dataChanged = new Subject<Array<UserModel>>();
    public dataChangedObs = this.dataChanged.asObservable();
    
    constructor() { }
    
    public getContactById(id: number): UserModel {
        return this.contacts.find((element: UserModel) => element.id === id);
    }

    public getContacts(): UserModel[] {
        return this.contacts;
    }

    public updateContact(user: UserModel) {
        const userIndex = this.contacts.findIndex((item: UserModel) => item.id == user.id);
        this.contacts[userIndex] = user;
        this.emitDataChange();
    }

    public addContact(user: UserModel) {
        user.id = this.contacts.length + 1;
        this.contacts.push(user);
        console.log(this.contacts);
        this.emitDataChange();
    }   

    public deleteContact(id: number) {
        const index = this.contacts.findIndex((el) => el.id === id);
        this.contacts.splice(index, 1);
        this.emitDataChange();
    }
    
    private emitDataChange(): void {
        this.dataChanged.next(this.contacts);
    }
}