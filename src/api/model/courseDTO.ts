export interface CourseDTO {
    id?: number;
    title?: string;
    shortDescription?: string;
    fullDescription?: string;
    requirements?: string;
    language?: string;
    lectures?: Array<string>;
    categoryId?: number;
}