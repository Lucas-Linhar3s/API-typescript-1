import express, { application } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { route } from './routes/routes';
import { Conection } from '../db/db';

// criando o app de conection com express
export const app = express()
// Conection recebe a conection do banco de dados
Conection()

// configurações de middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// configurações de rotas
app.use('/users', route)