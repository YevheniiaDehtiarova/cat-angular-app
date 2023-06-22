import { Temperament } from "./temperament.enum";

export interface Breed{
    weight: {
        imperial: number;
        metric: number;
    },
    id: string;
    name: string;
    temperament: Temperament.Active;
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: number;
    wikipedia_url:  string
}