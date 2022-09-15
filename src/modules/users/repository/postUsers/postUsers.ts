import { Users } from "../../domain/entity/entity"
import { Request } from "express"

export  function PostUsers(r: Request) { 
        const { fisrt_name, last_name, phone, email, password } = r.body      
        const user = Users.create({
               fisrt_name,
               last_name,
               phone,
               email,
               password})
        
        return user
}