import { BMIDetail } from "../BMI/bmi.interface";

export interface BasePerson {
    Gender: string;
    HeightCm: number;
    WeightKg: number;
}
  
export interface Person extends BasePerson, BMIDetail {
}

export interface PersonsResponseData {
    persons: Person[],
    countCategory: number;
}