export interface Project{
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type?: string;
    brand: string;
    quantityInStock?: number;
}
export interface ProjectParams{
    orderBy: string;
    searchTerm?: string;
    types: string[];
    pageNumber: number;
    pageSize:number
}