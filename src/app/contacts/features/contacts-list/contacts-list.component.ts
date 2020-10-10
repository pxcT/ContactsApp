import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

// Models
import { UserModel } from '@app-contacts/models/user.model';

// Interfaces
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';

// Dummy Data & Configs
import { CONTACTS_TABLE_CONFIG } from '@app-contacts/configs/contacts-table.config';
import { CONTACTS } from '@app-contacts/services/dummy-data';

@Component({
	selector: 'contacts-list',
	templateUrl: './contacts-list.component.html',
	styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
	public data: ILoadedItems<UserModel>= {
		count: CONTACTS.length, // will be used for pagination
		results: CONTACTS,
		totalCount: CONTACTS.length
	};
	public config = JSON.parse(JSON.stringify(CONTACTS_TABLE_CONFIG));

	constructor() { }

	onPageChange(e: PageEvent) {
		// NOTE: for future development (pagination)
	}

	
    /**
     * onItemClicked
     */
    public onItemClicked(e) {
        console.log('e', e);
    }
}
