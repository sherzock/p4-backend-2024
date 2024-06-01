import { Router } from "express";
import { db } from "./db";

const coursesRouter = Router();

coursesRouter.get("/", async (req, res) => {
  try {
    const courses = await db.course.findMany({
      orderBy: { name: "asc" },
    });

    res.status(200).json(courses);
  } catch (e) {
    res.status(500).json({ error: "Internal Error" });
  }
});

coursesRouter.post("/", async (req, res) => {
  try {
    const { name, code, teacherId, classId } = req.body;

    if (name === undefined || typeof name !== "string") {
      return res.status(400).json({ error: "Missing `name` field " });
    }
    const course = await db.course.create({
      data: {
        name: name,
        code: code,
        teacherId: teacherId,
        classromId: classId,
      },
    });
    res.status(201).json(course);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ error: "Couldn't create Course, come back later..." });
  }
});

coursesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const course = await db.course.findUniqueOrThrow({
      where: { idCourse: Number(id) },
    });

    res.status(200).json(course);
  } catch (e: any) {
    if (e.name === "NotFoundError") {
      return res.status(404).json({ message: `Not found.` });
    }
    res
      .status(500)
      .json({ error: `Internal error.` });
  }
});

export default coursesRouter;
