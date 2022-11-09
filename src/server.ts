import * as express from "express";
import personRouter from "./Persons/person.router";
import groupRouter from "./Groups/group.router";

const app: express.Application = express();

const port = 5002;

app.use('/person', personRouter)
app.use('/group', groupRouter)

// To indicate the project initiated, let us add console message
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
