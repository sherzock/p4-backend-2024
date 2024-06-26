import { Router } from "express";
import { db } from "./db";
import { send } from "./response";
import { z } from "zod";
import { catchErrors } from "./errors";

const coursesRouter = Router();

const idParamSchema = z.object({
  id:  z.coerce.number(),
});

const courseBodySchema = z.object({
  name: z.coerce.string().min(5).max(50),
  code: z.coerce.string().min(3).max(3),
  description: z.coerce.string().max(400),
  teacherId: z.coerce.number(),
  classromId: z.coerce.number(),
})

coursesRouter.get("/", catchErrors(async (req, res) => {
    
    if(req.query.name) {
      const courses = await db.course.findMany({
        where: {name: String(req.query.name)}, orderBy: { name: "asc" },
      });
  
      send(res).ok(courses);

    } else if(req.query.code) {
      const courses = await db.course.findMany({
        where: {code: String(req.query.code)}, orderBy: { name: "asc" },
      });
  
      send(res).ok(courses);

    } 
    else if(req.query.teacherId) {
      const courses = await db.course.findMany({
        where: {teacherId: Number(req.query.teacherId)}, orderBy: { name: "asc" },
      });

      send(res).ok(courses);

    } 
    else if(req.query.classromId) {
      const courses = await db.course.findMany({
        where: {classromId: Number(req.query.classromId)}, orderBy: { name: "asc" },
      });

      send(res).ok(courses);

    }
    else {
      const courses = await db.course.findMany({
        orderBy: { name: "asc" },
      });
  
      send(res).ok(courses);

    }
}));

coursesRouter.post("/", catchErrors(async (req, res) => {
    const data = courseBodySchema.parse(req.body);
    const course = await db.course.create({ data });
    send(res).Created(course);
}));

coursesRouter.get("/:id", catchErrors(async (req, res) => {
    const { id: idCourse } = idParamSchema.parse(req.params);
    const course = await db.course.findUniqueOrThrow({
      where: { idCourse } ,
    });
    send(res).ok(course);
}));


coursesRouter.put("/:id", catchErrors(async (req, res) => {
    const { id: idCourse } = idParamSchema.parse(req.params);
    const CourseData = courseBodySchema.parse(req.body);
    const updateCourse = await db.course.update({ where: { idCourse }, data: CourseData });
    send(res).ok(updateCourse);
}));

//Commenting delete courses as it shouldn't be able to delete any course, Important data would be lost, like students grades, enrollments, etc
// Also, it shouldn't work correctly unless it has no enrollments

/*
coursesRouter.delete("/:id", catchErrors(async (req, res) => {
  const { id: idCourse } = idParamSchema.parse(req.params);
  const deleteCourse = await db.course.delete({ where: { idCourse }});
  send(res).ok(deleteCourse);
}));
*/


export default coursesRouter;
