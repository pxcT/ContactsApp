import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// Interfaces
import { ICtTableConfig } from '@app-shared/interfaces/ct-table-config.interface';

@Component({
    selector: 'ct-table',
    templateUrl: './ct-table.component.html',
    styleUrls: ['./ct-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtTableComponent {
    @Input() config: ICtTableConfig;
    @Input() displayedColumns: Array<string>;
    @Input() set data(gridData) {
        if (!gridData) {
            return;
        }

        this.dataSource.data = [...gridData.results];
        this.count = gridData.count;
        this._data = [...gridData.results];
    };

    @Output() pageChange = new EventEmitter<PageEvent>();
    @Output() itemClicked = new EventEmitter<any>();

    public dataSource = new MatTableDataSource<any>([]);
    public count;
    public selection = new SelectionModel<any>(true, []);

    private _data = [];

    constructor() { }

    public onPageChange(e: PageEvent): void {
        this.pageChange.emit(e);
    }

    public checkboxLabel(row?: any): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    public isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    public masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

}
