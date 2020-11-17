import { Category } from './Category';

export interface Data {
    id:           number;
    name:         string;
    type:         string;
    price:        number;
    upc:          string;
    shipping:     number;
    description:  string;
    manufacturer: string;
    model:        string;
    url:          string;
    image:        string;
    createdAt:    string;
    updatedAt:    string;
    categories:   Category[];
}