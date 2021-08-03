import { BasePerson, Person, PersonsResponseData } from "./person.interface";
import { getBMIDetailForPerson } from "../BMI/bmi.service";


import ValidationResult from '../common/validation-result';
import validate from './person.interface.validator';

export const getPersons = (persons: BasePerson[]): Person[] => persons.map(person => getPerson(person));

export const getPerson = (person: BasePerson): Person => <Person>{...person, ...getBMIDetailForPerson(person.HeightCm, person.WeightKg)};

export const countType = (persons: Person[], category: string): Number => persons.reduce((acc, curr) => acc + (curr.BMICategory === category ? 1 : 0),0);

export const getResponseData = (body: unknown): PersonsResponseData => {
    const basePersons: ValidationResult = validate(body);

    if(basePersons.error) {
        throw basePersons.error;
    }

    const persons = getPersons(<BasePerson[]>basePersons.data);
    return <PersonsResponseData>{persons: persons, countCategory: countType(persons, 'Overweight')}
}