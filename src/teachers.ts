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
    if(req.query.firstName) {
      const teachers = await db.teacher.findMany({
          where: {firstName: String(req.query.firstName)}, orderBy: { firstName: "asc" },
        });
    
        send(res).ok(teachers);

  } else if(req.query.lastName) {
      const teachers = await db.teacher.findMany({
          where: {lastName: String(req.query.lastName)}, orderBy: { firstName: "asc" },
        });
    
        send(res).ok(teachers);

  } else if(req.query.email) {
      const teachers = await db.teacher.findMany({
          where: {email: String(req.query.email)},orderBy: { firstName: "asc" },
        });
    
        send(res).ok(teachers);
  } else {
      const teachers = await db.teacher.findMany({
          orderBy: { firstName: "asc" },
        });
    
        send(res).ok(teachers);
  }
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