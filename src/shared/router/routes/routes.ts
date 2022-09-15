import { Router } from "express";
import userController from "../../../modules/users/controller/userController";

export const route = Router();

// configuration de routes
route.get('/', userController.GetUsers);
route.post('/', userController.PostUsers);
route.put('/users/:id', userController.UpdateUsers);
route.delete('/users/:id', userController.DeleteUsers);