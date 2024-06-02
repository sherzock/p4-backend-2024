import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";
import { catchErrors } from "./errors";

const gradesRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const gradesBodySchema = z.object({
    name: z.coerce.string(),
    enrollmentId: z.coerce.number(),
    grade: z.coerce.number(),
    gradedAt: z.coerce.date(),
})

gradesRouter.get("/", catchErrors(async (req, res) => {
    if(req.query.name && req.query.enrollment) {
        const grades = await db.grade.findMany({
        where: {name: String(req.query.name), enrollmentId: Number(req.query.enrollment)},
        orderBy: { name: "asc" },
        });

        send(res).ok(grades);
    }
    else if(req.query.name) {
        const grades = await db.grade.findMany({
            where: {name: String(req.query.name)},
            orderBy: { name: "asc" },
            });

        send(res).ok(grades);
    }
    else if(req.query.enrollment) {
        const grades = await db.grade.findMany({
            where: {enrollmentId: Number(req.query.enrollment)},
            orderBy: { name: "asc" },
            });

        send(res).ok(grades);
    }
    else {
        const grades = await db.grade.findMany({
            orderBy: { name: "asc" },
            });
        
        send(res).ok(grades);
    }

}));

gradesRouter.post("/", catchErrors(async (req, res) => {
    const data = gradesBodySchema.parse(req.body);
    const grade = await db.grade.create({ data });
    send(res).Created(grade);
}));

gradesRouter.get("/:id", catchErrors(async (req, res) => {
    const { id: idGrade } = idParamSchema.parse(req.params);
    const grade = await db.grade.findUniqueOrThrow({
      where: { idGrade } ,
    });
    send(res).ok(grade);
}));


gradesRouter.put("/:id", catchErrors(async (req, res) => {
    const { id: idGrade } = idParamSchema.parse(req.params);
    const GradesData = gradesBodySchema.parse(req.body);
    const updateGrade = await db.grade.update({ where: { idGrade }, data: GradesData });
    send(res).ok(updateGrade);
}));

//Only Classrooms that aren't being used by any course can be deleted

gradesRouter.delete("/:id", catchErrors(async (req, res) => {
  const { id: idGrade } = idParamSchema.parse(req.params);
  const deleteGrade = await db.grade.delete({ where: { idGrade }});
  send(res).ok(deleteGrade);
}));


export default gradesRouter;