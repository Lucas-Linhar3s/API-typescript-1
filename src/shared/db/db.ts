import { Sequelize } from "sequelize";

// db: connection to database to sequulize.
const db = new Sequelize("projeto", "lucas", "Go7/flo2", {
        host: "localhost",
        dialect: "postgres",
})

export async function Conection() {
        await db.authenticate().then(() => {
        console.log("db: authenticated successfully")
}).catch((err) => {
        console.log(`db: authentication failed: ${err}`)
})
}