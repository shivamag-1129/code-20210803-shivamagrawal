import HttpException from './http-exception';

export default class ValidationResult {
    data: any;
    error: HttpException | null;

    constructor() {
        this.error = null;
    }
  }
  