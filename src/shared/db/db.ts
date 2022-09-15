import { Sequelize } from "sequelize";

// db: connection to database to sequulize.
 export const db = new Sequelize(
        "projeto",
        "Lucas", 
        "Go7/flo2", {
        host: "localhost",
        dialect: "mysql",
}); 

// export async function Conection() {
//         await db.authenticate().then(() => {
//         console.log("db: authenticated successfully")
// }).catch((err) => {
//         console.log(`db: authentication failed: ${err}`)
// })
// };
