import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Components
import { CtTableComponent } from '@app-shared/components/ct-table/ct-table.component';


@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        CtTableComponent,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [CtTableComponent, CtTableComponent],
    providers: [],
})
export class SharedModule { }
