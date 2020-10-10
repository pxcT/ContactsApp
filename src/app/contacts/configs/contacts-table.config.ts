import { ICtTableConfig } from '@app-shared/interfaces/ct-table-config.interface';

export const CONTACTS_TABLE_CONFIG: ICtTableConfig = {
    columns: [{
        columnDef: 'firstName',
        columnName: 'First Name',
        key: 'firstName'
    }, {
        columnDef: 'lastName',
        columnName: 'Last Name',
        key: 'lastName'
    }, {
        columnDef: 'phoneNumber',
        columnName: 'Phone Number',
        key: 'phoneNumber'
    }, {
        columnDef: 'email',
        columnName: 'Email',
        key: 'email'
    }],
    displayedColumns: ['select', 'firstName', 'lastName', 'phoneNumber', 'email']
}