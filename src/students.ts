import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";
import { catchErrors } from "./errors";

const studentsRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const studentBodySchema = z.object({
    firstName: z.coerce.string(),
    lastName: z.coerce.string(),
    email: z.coerce.string(),
    birthdate: z.coerce.string(),
})

studentsRouter.get("/", catchErrors(async (req, res) => {

    if(req.query.firstName) {
        const students = await db.student.findMany({
            where: {firstName: String(req.query.firstName)}, orderBy: { firstName: "asc" },
          });
      
          send(res).ok(students);

    } else if(req.query.lastName) {
        const students = await db.student.findMany({
             where: {lastName: String(req.query.lastName)}, orderBy: { firstName: "asc" },
          });
      
          send(res).ok(students);

    } else if(req.query.email) {
        const students = await db.student.findMany({
            where: {email: String(req.query.email)},orderBy: { firstName: "asc" },
          });
      
          send(res).ok(students);
    } else {
        const students = await db.student.findMany({
            orderBy: { firstName: "asc" },
          });
      
          send(res).ok(students);
    }

}));

studentsRouter.post("/", catchErrors(async (req, res) => {
    const data = studentBodySchema.parse(req.body);
    const student = await db.student.create({ data });
    send(res).Created(student);
}));

studentsRouter.get("/:id", catchErrors(async (req, res) => {
    const { id: idPerson } = idParamSchema.parse(req.params);
    const student = await db.student.findUniqueOrThrow({
      where: { idPerson } ,
    });
    send(res).ok(student);
}));


studentsRouter.put("/:id", catchErrors(async (req, res) => {
    const { id: idPerson } = idParamSchema.parse(req.params);
    const StudentData = studentBodySchema.parse(req.body);
    const updateStudent = await db.student.update({ where: { idPerson }, data: StudentData });
    send(res).ok(updateStudent);
}));

//Only students that aren't enrolled or do not have grades, can be deleted

studentsRouter.delete("/:id", catchErrors(async (req, res) => {
  const { id: idPerson } = idParamSchema.parse(req.params);
  const deleteTeacher = await db.student.delete({ where: { idPerson }});
  send(res).ok(deleteTeacher);
}));


export default studentsRouter;
