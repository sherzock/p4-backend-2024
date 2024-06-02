import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";

const coursesRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const courseBodySchema = z.object({
  name: z.coerce.string().min(5).max(50),
  code: z.coerce.string().min(3).max(3),
  teacherId: z.coerce.number(),
  classromId: z.coerce.number(),
})

coursesRouter.get("/", async (req, res, next) => {
  try {
    const courses = await db.course.findMany({
      orderBy: { name: "asc" },
    });

    send(res).ok(courses);
  } catch (e) {
    next(e);
  }
});

coursesRouter.post("/", async (req, res, next) => {
  try {
    const data = courseBodySchema.parse(req.body);
    const course = await db.course.create({ data });
    send(res).Created(course);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

coursesRouter.get("/:id", async (req, res, next) => {
  try {
    const { id: idCourse } = idParamSchema.parse(req.params);

    const course = await db.course.findUniqueOrThrow({
      where: { idCourse } ,
    });

    send(res).ok(course);
  } catch (e: any) {
    next(e);
  }
});


coursesRouter.put("/:id", async (req, res, next) => {
  try {
    const { id: idCourse } = idParamSchema.parse(req.params);
    const CourseData = courseBodySchema.parse(req.body);

    const updateCourse = await db.course.update({ where: { idCourse }, data: CourseData });

    send(res).ok(updateCourse);

  } catch(e) {
    next(e);
}
})

export default coursesRouter;
