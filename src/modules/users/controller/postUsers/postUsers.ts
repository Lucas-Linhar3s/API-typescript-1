import * as Express from "express";
import { subtrair } from "../../repository/repository";

type num =  {
        n1: number;
        n2: number;
}

export function post(r: Express.Request, w: Express.Response) {
        const use: num = {
                n1:  r.body.n1,
                n2:   r.body.n2
        }
        const result = subtrair(use.n1,use.n2)
        w.status(201).send(result.toUpperCase())
}