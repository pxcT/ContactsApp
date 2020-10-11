import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { UserModel } from '@app-contacts/models/user.model';

// Interfaces
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';

// Dummy Data & Configs
import { CONTACTS_TABLE_CONFIG } from '@app-contacts/configs/contacts-table.config';

// Services
import { ContactsService } from '@app-contacts/services/contacts.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'contacts-list',
	templateUrl: './contacts-list.component.html',
	styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy {
	public data: ILoadedItems<UserModel>;
	public config = JSON.parse(JSON.stringify(CONTACTS_TABLE_CONFIG));

	private destroy$ = new Subject<boolean>();

	constructor(private router: Router, private route: ActivatedRoute, private contactsService: ContactsService) {
		this.prepareTableData();
	}

	ngOnInit() {
		this.contactsService.dataChangedObs.pipe(
			takeUntil(this.destroy$)
		).subscribe((data: UserModel[]) => {
			this.data = {
				count: data.length,
				results: data,
				totalCount: data.length
			}
		})
	}

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
	
	private prepareTableData(): void {
		const contacts = this.contactsService.getContacts();
		this.data = {
			count: contacts.length,
			results: contacts,
			totalCount: contacts.length
		};
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
	}
}
