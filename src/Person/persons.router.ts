import express, { Request, Response, NextFunction } from "express";
import * as PersonService from "./persons.service";

export const personsRouter = express.Router();

personsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    try {
      const persons = PersonService.getResponseData(req.body);
      res.status(200).json(persons);
    } catch (e) {
      next(e);
    }
});