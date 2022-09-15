import express, { application } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { route } from './routes/routes';
import bodyParser from 'body-parser';

// criando o app de conection com express
export const app = express()
// Conection recebe a conection do banco de dados
//Conection()

// configurações de middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configurações de rotas
app.use(route)