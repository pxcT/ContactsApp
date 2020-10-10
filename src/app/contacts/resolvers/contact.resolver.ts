import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// Models
import { UserModel } from '@app-contacts/models/user.model';

@Injectable({ providedIn: 'root' })
export class ContactResolver implements Resolve<UserModel> {
    resolve(route: ActivatedRouteSnapshot): Observable<UserModel> | Promise<UserModel> {
        return ;
    }
}