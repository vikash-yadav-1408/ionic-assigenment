import { Service } from "./Services";
import { State } from "./State";
export interface Data {
    id:        number;
    name:      string;
    type:      string;
    address:   string;
    address2:  string;
    city:      string;
    state:     State;
    zip:       string;
    lat:       number;
    lng:       number;
    hours:     string;
    createdAt: Date;
    updatedAt: Date;
    services:  Service[];
}