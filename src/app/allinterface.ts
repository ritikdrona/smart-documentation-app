export interface Image {
    id: number;
    image: string;
    text: string;
    document: number;
    created_at: Date;
}
export interface Document {
    id: number;
    template: number;
    status: number;
    created_by: number;
    converted_document: string;
    approved_by: number;
    deleted_by: number;
    created_at: Date;
    updated_at: Date;
    approved_at: Date;
    deleted_at: Date;
    images: Image[];
}