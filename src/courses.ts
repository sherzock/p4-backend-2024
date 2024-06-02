import { Router } from "express";
import { db } from "./db";
import { send } from "./response";

const coursesRouter = Router();

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
    const { name, code, teacherId, classId } = req.body;

    if (name === undefined || typeof name !== "string") {
      send(res).BadRequest( "Missing `name` field " );
    }
    const course = await db.course.create({
      data: {
        name: name,
        code: code,
        teacherId: teacherId,
        classromId: classId,
      },
    });
    send(res).Created(course);
  } catch (e) {
    console.error(e);
   send(res).InternalError( "Couldn't create Course, come back later..." );
  }
});

coursesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const course = await db.course.findUniqueOrThrow({
      where: { idCourse: Number(id) },
    });

    send(res).ok(course);
  } catch (e: any) {
    if (e.name === "NotFoundError") {
      send(res).NotFound(`Course Not found`);
    }
    send(res).InternalError(`Internal error.` );
  }
});

export default coursesRouter;
