export interface ListResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
}
