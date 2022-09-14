import { Router } from "express";
import { Get } from "../../../modules/users/controller/getUsers/getUsers";
import { post } from "../../../modules/users/controller/postUsers/postUsers";

export const route = Router();

// configuration de routes
route.get('/', Get)
route.post('/', post)