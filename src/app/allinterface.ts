export interface Image {
    id: number;
    image: any;
    text: string;
    document: number;
    created_at: Date;
}

export class ImageC{
    id: number | null;
    image: string;
    text: string;
    document: number | null;
    created_at: Date;

    constructor(obj?: ImageC){
        this.id = obj && obj.id || null;
        this.image = obj && obj.image || "";
        this.text = obj && obj.text || "";
        this.document = obj && obj.document || null;
        this.created_at = obj && obj.created_at || new Date();
    }
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
export class DocumentC{
    id: number  | null;
    template: number | null;
    status: number | null;
    created_by: number | null;
    converted_document: string | null;
    approved_by: number | null;
    deleted_by: number | null;
    created_at: Date;
    updated_at: Date;
    approved_at: Date;
    deleted_at: Date;
    images: any[];

    constructor(obj?: DocumentC){
        this.id = obj && obj.id || null;
        this.template = obj && obj.template || null;
        this.status = obj && obj.status || null;
        this.created_by = obj && obj.created_by || null;
        this.converted_document = obj && obj.converted_document || null;
        this.approved_by = obj && obj.approved_by || null;
        this.deleted_by = obj && obj.deleted_by || null;
        this.created_at = obj && obj.created_at || new Date();
        this.updated_at = obj && obj.updated_at || new Date();
        this.approved_at = obj && obj.approved_at || new Date();
        this.deleted_at = obj && obj.deleted_at || new Date();
        this.images = obj && obj.images || [];

    }
}