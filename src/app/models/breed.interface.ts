import { BreedWeight } from "./breed-weight";
import { Temperament } from "./temperament.enum";

export interface Breed{
    weight: BreedWeight,
    id: string;
    name: string;
    temperament: Temperament.Active;
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: number;
    wikipedia_url:  string
}