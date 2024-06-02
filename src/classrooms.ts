import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";
import { catchErrors } from "./errors";

const classroomsRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const classroomsBodySchema = z.object({
    name: z.coerce.string(),
    capacity: z.coerce.number(),
    location: z.coerce.string(),
    url: z.coerce.string(),
})

classroomsRouter.get("/", catchErrors(async (req, res) => {
    const classroom = await db.classroom.findMany({
      orderBy: { name: "asc" },
    });

    send(res).ok(classroom);
}));

classroomsRouter.post("/", catchErrors(async (req, res) => {
    const data = classroomsBodySchema.parse(req.body);
    const classroom = await db.classroom.create({ data });
    send(res).Created(classroom);
}));

classroomsRouter.get("/:id", catchErrors(async (req, res) => {
    const { id: idClassroom } = idParamSchema.parse(req.params);
    const classroom = await db.classroom.findUniqueOrThrow({
      where: { idClassroom } ,
    });
    send(res).ok(classroom);
}));


classroomsRouter.put("/:id", catchErrors(async (req, res) => {
    const { id: idClassroom } = idParamSchema.parse(req.params);
    const ClassroomData = classroomsBodySchema.parse(req.body);
    const updateClassroom = await db.classroom.update({ where: { idClassroom }, data: ClassroomData });
    send(res).ok(updateClassroom);
}));

//Only Classrooms that aren't being used by any course can be deleted

classroomsRouter.delete("/:id", catchErrors(async (req, res) => {
  const { id: idClassroom } = idParamSchema.parse(req.params);
  const deleteClassroom = await db.classroom.delete({ where: { idClassroom }});
  send(res).ok(deleteClassroom);
}));


export default classroomsRouter;