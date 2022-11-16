import express, { Application } from "express";
import personRouter from "./Persons/person.router";
import groupRouter from "./Groups/group.router";

export const app: Application = express();

export const PORT = process.env.NODE_ENV || 5002;

app.use('/person', personRouter)
app.use('/group', groupRouter)

