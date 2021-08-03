export default class HttpException extends Error {
    statusCode: number;
    status?: number;
    message: string;
    error?: Object;
  
    constructor(statusCode: number, message: string, error?: Object) {
      super(message);
  
      this.statusCode = statusCode;
      this.message = message;
      this.error = error;
    }
  }
  