import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Resolvers & Guards
import { ContactResolver } from './resolvers/contact.resolver';

// Components
import { ContactPopupComponent } from '@app-contacts/features/contact-popup/contact-popup.component';
import { ContactsListComponent } from '@app-contacts/features/contacts-list/contacts-list.component'
import { ContactDialogComponent } from '@app-contacts/features/contact-dialog/contact-dialog.component';

// Actions
import { CONTACT_ROUTE_ACTIONS } from './contact-route-actions';


export const CONTACT_ROUTES = [{
    path: '',
    component: ContactsListComponent,
    children: [{
        path: CONTACT_ROUTE_ACTIONS.CREATE,
        component: ContactPopupComponent,
        data: {
            action: CONTACT_ROUTE_ACTIONS.CREATE
        }
    }, {
        path: ':id',
        component: ContactPopupComponent,
        resolve: {
            contact: ContactResolver
        },
        data: {
            action: CONTACT_ROUTE_ACTIONS.EDIT
        }
    }]
}]


@NgModule({
    imports: [RouterModule.forChild(CONTACT_ROUTES)],
    exports: [RouterModule],
})
export class ContactsRoutingModule { 
    static components = [ContactsListComponent, ContactPopupComponent, ContactDialogComponent];
}
