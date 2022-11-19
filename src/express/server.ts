import express, { Application } from "express";
import personRouter from "./route/person.route";
import groupRouter from "./route/group.route";

export const app: Application = express();

export const PORT = process.env.NODE_ENV || 5002;

app.use('/person', personRouter)
app.use('/group', groupRouter)


export function startServer() {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
}