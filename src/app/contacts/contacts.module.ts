import { NgModule } from '@angular/core';

// User-defined modules
import { ContactsRoutingModule } from '@app-contacts/contacts-routing.module';
import { SharedModule } from '@app-shared/shared.module';

// Guards and Resolvers
import { ContactResolver } from '@app-contacts/resolvers/contact.resolver';

// Services
import { ContactsService } from '@app-contacts/services/contacts.service';

@NgModule({
    imports: [ContactsRoutingModule, SharedModule],
    exports: [],
    declarations: ContactsRoutingModule.components,
    providers: [ContactsService, ContactResolver],
})
export class ContactsModule { }
