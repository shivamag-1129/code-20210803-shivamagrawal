/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { personsRouter } from './Person/persons.router';
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}
 
const PORT: Number = parseInt(process.env.PORT);
 
const app = express();

/**
 *  App Configuration
 */

app.use(bodyParser.json({limit: '28mb'}));
app.use(bodyParser.urlencoded({limit: '28mb', extended: false}));

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/persons", personsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
