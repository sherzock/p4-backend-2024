import type { Express } from "express";
import { db } from "./db";

export const setupCoursesEndpoints = (app: Express) => {

    app.get("/courses", async (req, res) => {
        try{
                const Courses = await db.course.findMany({
                    orderBy: {name: "asc"},
                });

            res.status(200).json(Courses);
        } catch (e) {
            res.status(500).json({ error: "Internal Error" });
            }
        }
    );

}