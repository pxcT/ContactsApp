import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from '@app-contacts/contacts-routing.module';
import { SharedModule } from '@app-shared/shared.module';

@NgModule({
    imports: [ContactsRoutingModule, SharedModule],
    exports: [],
    declarations: ContactsRoutingModule.components,
    providers: [],
})
export class ContactsModule { }
