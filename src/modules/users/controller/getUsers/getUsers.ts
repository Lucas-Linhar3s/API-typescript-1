import * as express from "express";
import { soma, subtrair } from "../../repository/repository";

export function Get(r : express.Request, w : express.Response) {
         const result = soma(1,2)
         w.send(result)
        }