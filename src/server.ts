
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { db } from "./db";
import { setupCoursesEndpoints } from "./courses";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

setupCoursesEndpoints(app);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
});