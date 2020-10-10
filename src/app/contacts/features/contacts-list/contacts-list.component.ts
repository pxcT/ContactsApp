import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

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

	constructor(private router: Router, private route: ActivatedRoute) { }

	onPageChange(e: PageEvent) {
		// NOTE: for future development (pagination)
	}

	
    /**
     * onItemClicked
     */
    public onItemClicked(user: UserModel) {
		console.log('userid', user.id);
        if (user && user.id) {
			this.router.navigate([user.id], { relativeTo: this.route})
		}
    }
}
