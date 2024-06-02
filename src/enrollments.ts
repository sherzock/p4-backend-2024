import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";
import { catchErrors } from "./errors";

const enrollmentsRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const enrollmentsBodySchema = z.object({
    studentId: z.coerce.number(),
    courseId: z.coerce.number(),
    enrolledAt: z.coerce.date(),
})

enrollmentsRouter.get("/", catchErrors(async (req, res) => {
    const enrollments = await db.enrollment.findMany({
      orderBy: { studentId: "asc" },
    });

    send(res).ok(enrollments);
}));

enrollmentsRouter.post("/", catchErrors(async (req, res) => {
const data = enrollmentsBodySchema.parse(req.body);
const enrollment = await db.enrollment.create({ data });
    send(res).Created(enrollment);
}));

enrollmentsRouter.get("/:id", catchErrors(async (req, res) => {
    const { id: idEnrollment } = idParamSchema.parse(req.params);
    const enrollment = await db.enrollment.findUniqueOrThrow({
      where: { idEnrollment } ,
    });
    send(res).ok(enrollment);
}));

//Shouldn't be updated

/*enrollmentsRouter.put("/:id", catchErrors(async (req, res) => {
    const { id: idEnrollment } = idParamSchema.parse(req.params);
    const EnrollmentData = enrollmentsBodySchema.parse(req.body);
    const updateEnrollment = await db.enrollment.update({ where: { idEnrollment }, data: EnrollmentData });
    send(res).ok(updateEnrollment);
}));*/

//Only Classrooms that aren't being used by any course can be deleted

enrollmentsRouter.delete("/:id", catchErrors(async (req, res) => {
  const { id: idEnrollment } = idParamSchema.parse(req.params);
  const deleteEnrollment = await db.enrollment.delete({ where: { idEnrollment }});
  send(res).ok(deleteEnrollment);
}));


export default enrollmentsRouter;