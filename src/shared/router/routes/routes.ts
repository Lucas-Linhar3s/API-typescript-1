import { Router } from "express";
import { Get } from "../../../modules/users/controller/getUsers/getUsers";

export const route = Router();

// configuration de routes
route.get('/', Get)