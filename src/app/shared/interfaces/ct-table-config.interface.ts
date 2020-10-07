export interface ICtTableConfig {
    columns: ICtColumnConfig[];
    displayedColumns: Array<string>;
}

export interface ICtColumnConfig {
    columnDef: string; // key for column 
    columnName: string; // Column label
    key: string; // key for element
}