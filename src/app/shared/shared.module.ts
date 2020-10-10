import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';

// Components
import { CtTableComponent } from '@app-shared/ct-table/ct-table.component';


@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
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
    declarations: [CtTableComponent],
    providers: [],
})
export class SharedModule { }
