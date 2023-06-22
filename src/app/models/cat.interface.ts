import { Breed } from "./breed.interface";


export interface Cat {
    id: string;
    width: number;
    height: number;
    url: string;
    breeds: Array<Breed>;
    categories?: {
        id: number,
        name: string
    }
}