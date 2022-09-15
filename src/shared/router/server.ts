import {db } from "../db/db";
import { app } from "./app";

const port = process.env.PORT || 3333;

// connect to the server
app.listen(port, async () => {
        try {
                await db.sync()
                console.log(`starting server on port ${port}`);
        } catch (err) {
                console.log(`server failed: ${err}`);
        }
});