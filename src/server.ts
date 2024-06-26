
import cors from "cors";
import express from "express";
import morgan from "morgan";

import coursesRouter from "./courses";
import studentsRouter from "./students";
import teachersRouter from "./teachers";
import { defaultErrorHandler } from "./errors";
import classroomsRouter from "./classrooms";
import enrollmentsRouter from "./enrollments";
import gradesRouter from "./grades";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/courses", coursesRouter);
app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);
app.use("/classrooms", classroomsRouter);
app.use("/enrollments", enrollmentsRouter);
app.use("/grades", gradesRouter);



app.use(defaultErrorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
});