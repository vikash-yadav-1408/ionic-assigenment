import { Data } from "./Data";
export interface Stores {
    total: number;
    limit: number;
    skip:  number;
    data:  Data[];
}