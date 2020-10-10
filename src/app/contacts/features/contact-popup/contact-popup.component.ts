import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-contact-popup',
	templateUrl: './contact-popup.component.html',
	styleUrls: ['./contact-popup.component.scss']
})
export class ContactPopupComponent implements OnInit, OnDestroy {
	private destroy$ = new Subject<boolean>();

	constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.initialRender();
		this.route.params.pipe(
			takeUntil(this.destroy$)
		).subscribe((data) => {
			this.dialog.open(ContactDialog, {
				data: {
					animal: 'panda'
				}
			});
		});
	}


	private initialRender(): void {
		this.dialog.open(ContactDialog, {
			data: {
				animal: 'panda'
			}
		});
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
	}
}

@Component({
	selector: 'contact-dialog',
	templateUrl: 'contact-dialog.html',	
})
export class ContactDialog {
	constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}