import express, { Application } from "express";
import personRouter from "./Persons/person.router";
import groupRouter from "./Groups/group.router";

const app: Application = express();

const port = process.env.NODE_ENV || 5002;

app.use('/person', personRouter)
app.use('/group', groupRouter)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
