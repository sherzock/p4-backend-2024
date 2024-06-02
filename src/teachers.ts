import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";
import { catchErrors } from "./errors";

const teachersRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const teachersBodySchema = z.object({
    firstName: z.coerce.string(),
    lastName: z.coerce.string(),
    email: z.coerce.string(),
    birthdate: z.coerce.string(),
})

teachersRouter.get("/", catchErrors(async (req, res) => {
    const teachers = await db.teacher.findMany({
      orderBy: { firstName: "asc" },
    });

    send(res).ok(teachers);
}));

teachersRouter.post("/", catchErrors(async (req, res) => {
    const data = teachersBodySchema.parse(req.body);
    const teacher = await db.teacher.create({ data });
    send(res).Created(teacher);
}));

teachersRouter.get("/:id", catchErrors(async (req, res) => {
    const { id: idPerson } = idParamSchema.parse(req.params);
    const teacher = await db.teacher.findUniqueOrThrow({
      where: { idPerson } ,
    });
    send(res).ok(teacher);
}));


teachersRouter.put("/:id", catchErrors(async (req, res) => {
    const { id: idPerson } = idParamSchema.parse(req.params);
    const TeacherData = teachersBodySchema.parse(req.body);
    const updateTeacher = await db.teacher.update({ where: { idPerson }, data: TeacherData });
    send(res).ok(updateTeacher);
}));

//Only teachers that aren't teaching any course can be deleted

teachersRouter.delete("/:id", catchErrors(async (req, res) => {
  const { id: idPerson } = idParamSchema.parse(req.params);
  const deleteTeacher = await db.teacher.delete({ where: { idPerson }});
  send(res).ok(deleteTeacher);
}));


export default teachersRouter;