
import cors from "cors";
import express from "express";
import morgan from "morgan";

import coursesRouter from "./courses";
import { defaultErrorHandler } from "./errors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/courses", coursesRouter);

app.use(defaultErrorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
});