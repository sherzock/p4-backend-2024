
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { db } from "./db";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/courses", async (req, res) => {

        const Courses = await db.course.findMany({
            orderBy: {name: "asc"},
        });

    res.status(200).json(Courses);
});


const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
});