import { StoreServices } from "./StoreServices";
export interface Service {
    id:            number;
    name:          string;
    createdAt:     Date;
    updatedAt:     Date;
    storeservices: StoreServices;
}
