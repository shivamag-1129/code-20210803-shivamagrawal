import { BMIDetail } from "./bmi.interface";

export const getBMIDetailForPerson = (HeightCm: number, WeightKg: number): BMIDetail => {
    const bmi = WeightKg/((HeightCm/100.0)**2);

    let bmiCategory = '';
    let healthRisk = '';

    if(bmi >= 40) {
        bmiCategory = 'Very severely obese';
        healthRisk = 'Very high risk';
    }
    else if(bmi >= 35) {
        bmiCategory = 'Severely obese';
        healthRisk = 'High risk';
    }
    else if(bmi >= 30) {
        bmiCategory = 'Moderately obese';
        healthRisk = 'Medium risk';
    }
    else if(bmi >= 25) {
        bmiCategory = 'Overweight';
        healthRisk = 'Enhanced risk';
    }
    else if(bmi >= 18.5) {
        bmiCategory = 'Normal weight';
        healthRisk = 'Low risk';
    }
    else {
        bmiCategory = 'Underweight';
        healthRisk = 'MalnutritionRisk';
    }

    return <BMIDetail>{BMI: bmi, BMICategory: bmiCategory, HealthRisk: healthRisk};
};