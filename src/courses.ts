import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";

const coursesRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const courseBodySchema = z.object({
  name: z.coerce.string(),
  code: z.coerce.string(),
  teacherId: z.coerce.number(),
  classromId: z.coerce.number(),
})

coursesRouter.get("/", async (req, res) => {
  try {
    const courses = await db.course.findMany({
      orderBy: { name: "asc" },
    });

    send(res).ok(courses);
  } catch (e) {
    send(res).InternalError( "Internal Error" );
  }
});

coursesRouter.post("/", async (req, res) => {
  try {
    const data = courseBodySchema.parse(req.body);
    const course = await db.course.create({ data });
    send(res).Created(course);
  } catch (e) {
    console.error(e);
   send(res).InternalError( "Couldn't create Course, come back later..." );
  }
});

coursesRouter.get("/:id", async (req, res) => {
  try {
    const { id: idCourse } = idParamSchema.parse(req.params);

    const course = await db.course.findUniqueOrThrow({
      where: { idCourse } ,
    });

    send(res).ok(course);
  } catch (e: any) {
    if (e.name === "NotFoundError") {
      send(res).NotFound(`Course Not found`);
    }
    send(res).InternalError(`Internal error.` );
  }
});


coursesRouter.put("/:id", async (req, res) => {
  try {
    const { id: idCourse } = idParamSchema.parse(req.params);
    const CourseData = courseBodySchema.parse(req.body);

    const updateCourse = await db.course.update({ where: { idCourse }, data: CourseData });

    send(res).ok(updateCourse);

  } catch(e) {

}
})

export default coursesRouter;
