import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

// Services
import { ContactsService } from '@app-contacts/services/contacts.service';

// Models
import { UserModel } from '@app-contacts/models/user.model';

@Injectable()
export class ContactResolver implements Resolve<UserModel> {
    constructor(private contactsService: ContactsService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<UserModel> | Promise<UserModel> {
        return of(this.contactsService.getContactById(parseInt(route.paramMap.get('id'))));
    }
}