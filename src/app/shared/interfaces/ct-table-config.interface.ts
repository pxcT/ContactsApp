export interface ICtTableConfig {
    columns: ICtColumnConfig[];
    displayedColumns: Array<string>;
}

export interface ICtColumnConfig {
    columnDef: string;
    columnName: string;
    key: string;
}