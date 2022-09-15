import * as Express from 'express';
import { Error, UniqueConstraintError, ValidationErrorItemType } from 'sequelize';
import { PostUsers } from '../repository/postUsers/postUsers';

class UserController {
        // PostUsers is a function for creating users
        async PostUsers(r: Express.Request, w: Express.Response) {
                const result = PostUsers(r);
                result.then(() => {
                        w.status(201).json(`message: User Create successfully`)
                }).catch((error) => {
                       w.status(500).send(error.errors)
                });
        }

        // GetUsers is a function for read all users
        async GetUsers(r: Express.Request, w: Express.Response) {}

        // UpdateUsers is a function for updating all users
        async UpdateUsers(r: Express.Request, w: Express.Response) {}

        // DeleteUsers is a function for deleting all users
        async DeleteUsers(r: Express.Request, w: Express.Response) {}
}

export default new UserController();