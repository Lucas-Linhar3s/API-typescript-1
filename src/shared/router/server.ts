import { app } from "./app";

const port = process.env.PORT || 3333;

// connect to the server
app.listen(port, () => {
        try {
                console.log(`starting server on port ${port}`);
        } catch (err) {
                console.log(`server failed: ${err}`);
        }
});