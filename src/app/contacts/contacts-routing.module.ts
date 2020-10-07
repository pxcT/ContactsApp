import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsListComponent } from '@app-contacts/features/contacts-list/contacts-list.component';

export const CONTACT_ROUTES = [{
    path: '',
    component: ContactsListComponent
}]

@NgModule({
    imports: [RouterModule.forChild(CONTACT_ROUTES)],
    exports: [RouterModule],
})
export class ContactsRoutingModule { 
    static components = [ContactsListComponent];
}
