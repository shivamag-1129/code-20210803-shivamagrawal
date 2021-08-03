// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv from 'ajv';
import { ValidateFunction as Ajv_ValidateFunction} from 'ajv';

import { BasePerson } from './person.interface';

import HttpException from '../common/http-exception';
import ValidationResult from '../common/validation-result';

export const ajv = new Ajv({"allErrors":true,"coerceTypes":false,"unicode":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {BasePerson};
export const BasePersonListSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "BasePerson": {
      "properties": {
        "Gender": {
          "type": "string"
        },
        "HeightCm": {
          "type": "number"
        },
        "WeightKg": {
          "type": "number"
        }
      },
      "required": [
        "Gender",
        "HeightCm",
        "WeightKg"
      ],
      "type": "object",
      "additionalProperties": false
    }
  },
  "items": {
    "$ref": "#/definitions/BasePerson"
  },
  "type": "array"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv_ValidateFunction, 'errors'>
export const isBasePersonList = ajv.compile(BasePersonListSchema) as ValidateFunction<ValidationResult>;
export default function validate(value: unknown): ValidationResult {
  const validationResult = new ValidationResult();
  if (isBasePersonList(value)) {
    validationResult.data = value;
  } else {
    const httpException = new HttpException(400, isBasePersonList.errors![0]!.message as string, isBasePersonList.errors!.filter((e: any) => e.keyword !== 'if'));
    validationResult.error = httpException;
  }
  return validationResult;
}
