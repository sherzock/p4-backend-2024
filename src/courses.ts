import { Router } from "express";
import { db } from "./db";

const coursesRouter = Router();

coursesRouter.get("/", async (req, res) => {
  try {
    const Courses = await db.course.findMany({
      orderBy: { name: "asc" },
    });

    res.status(200).json(Courses);
  } catch (e) {
    res.status(500).json({ error: "Internal Error" });
  }
});

coursesRouter.post("/", async (req, res) => {
  try {
    const { name, code , teacherId, classId } = req.body;

    if (name === undefined || typeof name !== "string") {
      return res.status(400).json({ error: "Missing `name` field " });
    }
    const course = await db.course.create({
      data: { name: name, code: code, teacherId: teacherId, classromId: classId },
    });
    res.status(201).json(course);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ error: "Couldn't create Course, come back later..." });
  }
});

export default coursesRouter;
