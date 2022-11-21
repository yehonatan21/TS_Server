import express, { Application } from "express";
import personRouter from "./route/person.route";
import groupRouter from "./route/group.route";
import bodyParser from "body-parser";

const app: Application = express();
const PORT: Number | string = process.env.NODE_ENV || 5002;

app.use(bodyParser.json());  

app.use('/person', personRouter)
app.use('/group', groupRouter)

export function startServer() {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
}