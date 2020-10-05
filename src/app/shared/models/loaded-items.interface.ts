export interface ILoadedItems<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<T>
}