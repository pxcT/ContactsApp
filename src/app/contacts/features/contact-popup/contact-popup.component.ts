import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Components
import { ContactDialogComponent } from '@app-contacts/features/contact-dialog/contact-dialog.component';

// Material
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-contact-popup',
	templateUrl: './contact-popup.component.html',
	styleUrls: ['./contact-popup.component.scss']
})
export class ContactPopupComponent implements OnInit, OnDestroy {
	private destroy$ = new Subject<boolean>();

	constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.pipe(
			takeUntil(this.destroy$)
		).subscribe((data) => {
			this.dialog.open(ContactDialogComponent, {
				data: {
					contact: data.id ? this.route.snapshot.data['contact'] : null,
					action:	this.route.snapshot.data.action,
					dialogRef: this.dialog
				}
			});
		});

	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
	}
}

