import { db } from "../src/db";

async function main() {
  const student1 = await db.student.create({
    data: {
      firstName: "Jacob",
      lastName: "Galofre Calbeto",
      email: "jacobo.galofre@test.com",
    },
  });

  const student2 = await db.student.create({
    data: {
      firstName: "Bilbo",
      lastName: "Baggins",
      email: "bilbo.baggins@test.com",
    },
  });
  const student3 = await db.student.create({
    data: {
      firstName: "Frodo",
      lastName: "Baggins",
      email: "frodo.baggins@test.com",
    },
  });
  const student4 = await db.student.create({
    data: {
      firstName: "Samwise",
      lastName: "Gamgee",
      email: "samwise.gamgee@test.com",
    },
  });
  const student5 = await db.student.create({
    data: {
      firstName: "Meriadoc",
      lastName: "Brandybuck",
      email: "meriadoc.brandybuck@test.com",
    },
  });
  const student6 = await db.student.create({
    data: {
      firstName: "Gandalf",
      lastName: "The Grey",
      email: "gandalf.thegrey@test.com",
    },
  });
  const student7 = await db.student.create({
    data: {
      firstName: "Aragorn",
      lastName: "Telcontar",
      email: "aragorn.telcontar@test.com",
    },
  });
  const student8 = await db.student.create({
    data: {
      firstName: "Legolas",
      lastName: "Greenleaf",
      email: "legolas.greenleaf@test.com",
    },
  });
  const student9 = await db.student.create({
    data: {
      firstName: "Gimli",
      lastName: "son of Gloin",
      email: "gimli.sonofgloin@test.com",
    },
  });
  const student10 = await db.student.create({
    data: {
      firstName: "Boromir",
      lastName: "son of Denethor",
      email: "boromir.sonofdebethor@test.com",
    },
  });
  const student11 = await db.student.create({
    data: {
      firstName: "Lobelia",
      lastName: "Sacksville Baggins",
      email: "lobelia.sacksville@test.com",
    },
  });
  const student12 = await db.student.create({
    data: {
      firstName: "Otho",
      lastName: "Sacksville Baggins",
      email: "Otho.Sacksville@test.com",
    },
  });
  const student13 = await db.student.create({
    data: {
      firstName: "Thorin",
      lastName: "Oakenshield",
      email: "thorin.oakenshield@test.com",
    },
  });
  const student14 = await db.student.create({
    data: {
      firstName: "Belladonna",
      lastName: "Took",
      email: "belladonna.took@test.com",
    },
  });
  const student15 = await db.student.create({
    data: {
      firstName: "Tom",
      lastName: "Bombadil",
      email: "tom.bombadil@test.com",
    },
  });
  const student16 = await db.student.create({
    data: {
      firstName: "Berylla",
      lastName: "Boffin",
      email: "berylla.boffin@test.com",
    },
  });
  const student17 = await db.student.create({
    data: {
      firstName: "Linda",
      lastName: "Baggins",
      email: "linda.baggins@test.com",
    },
  });
  const student18 = await db.student.create({
    data: {
      firstName: "Primula",
      lastName: "Brandybuck",
      email: "primula.brandybuck@test.com",
    },
  });

  const student19 = await db.student.create({
    data: {
      firstName: "John",
      lastName: "Ronald Reuel Tolkien",
      email: "JRR.tolkien@test.com",
    },
  });

  const student20 = await db.student.create({
    data: {
      firstName: "Edith",
      lastName: "Mary Tolkien",
      email: "edith.tolkien@test.com",
    },
  });

  const Teacher1 = await db.teacher.create({
    data: {
      firstName: "Harry",
      lastName: "Potter",
      email: "harry.potter@test.com",
    },
  });

  const Teacher2 = await db.teacher.create({
    data: {
      firstName: "Hermione",
      lastName: "Granger",
      email: "hermione.granger@test.com",
    },
  });

  const Teacher3 = await db.teacher.create({
    data: {
      firstName: "Ronald",
      lastName: "Weasly",
      email: "ronald.weasly@test.com",
    },
  });

  const Teacher4 = await db.teacher.create({
    data: {
      firstName: "Albus",
      lastName: "Dumbeldore",
      email: "albus.dumbelodre@test.com",
    },
  });

  const Teacher5 = await db.teacher.create({
    data: {
      firstName: "Severus",
      lastName: "Snape",
      email: "severus.snape@test.com",
    },
  });

  const Classroom1 = await db.classroom.create({
    data: {
      name: "A1",
      capacity: 20,
      location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
    },
  });

  const Classroom2 = await db.classroom.create({
    data: {
      name: "B1",
      capacity: 44,
      location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
    },
  });

  const Classroom3 = await db.classroom.create({
    data: {
      name: "Online",
      url: "meet.google.com/test1",
    },
  });

  const Classroom4 = await db.classroom.create({
    data: {
      name: "Auditorium",
      capacity: 300,
      location: "C/ de Badajoz, 73, Sant Martí, 08005 Barcelona",
    },
  });

  const Course1 = await db.course.create({
    data: {
      name: "FrontEnd Development",
      code: "FD",
      description: "Learning the Development of a FrontEnd application.",
      teacherId: 1,
      classromId: 1,
    },
  });

  const Course2 = await db.course.create({
    data: {
      name: "BackEnd Development",
      code: "BD",
      description: "Learning the Development of a BackEnd application.",
      teacherId: 2,
      classromId: 2,
    },
  });

  const Course3 = await db.course.create({
    data: {
      name: "Video games Development",
      code: "VD",
      description: "Learning the Development of Video games.",
      teacherId: 3,
      classromId: 3,
    },
  });

  const Course4 = await db.course.create({
    data: {
      name: "Cybersecurity",
      code: "CB",
      description:
        "Learning about the prevention and methods you can use to stay safe using a computer.",
      teacherId: 4,
      classromId: 4,
    },
  });

  const Course5 = await db.course.create({
    data: {
      name: "Data Science",
      code: "DS",
      description:
        "Learning about Data Science and how to implement it in other fields of computer science",
      teacherId: 1,
      classromId: 1,
    },
  });

  const Course6 = await db.course.create({
    data: {
      name: "AI Development",
      code: "AI",
      description:
        "Learning tabout the different techniques used nowadays to develop AI.",
      teacherId: 1,
      classromId: 1,
    },
  });

  const Course7 = await db.course.create({
    data: {
      name: "BlockChain Technologies",
      code: "BT",
      description: "Learning about Blockchain technologies and its uses.",
      teacherId: 3,
      classromId: 3,
    },
  });

  const Course8 = await db.course.create({
    data: {
      name: "Big Data",
      code: "DB",
      description:
        "Learning  about Big Data techn ologies and its applications.",
      teacherId: 2,
      classromId: 2,
    },
  });

  const Course9 = await db.course.create({
    data: {
      name: "Marketing",
      code: "MK",
      description:
        "Learning on how to create a proper Marketing project and campaign for a product or brand.",
      teacherId: 2,
      classromId: 2,
    },
  });

  const St1Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 1,
      courseId: 1,
    },
  });

  const St1Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 1,
      courseId: 2,
    },
  });

  const St1Enrrolment3 = await db.enrollment.create({
    data: {
      studentId: 1,
      courseId: 3,
    },
  });

  const St2Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 2,
      courseId: 4,
    },
  });

  const St2Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 2,
      courseId: 5,
    },
  });

  const St2Enrrolment3 = await db.enrollment.create({
    data: {
      studentId: 2,
      courseId: 6,
    },
  });

  const St3Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 3,
      courseId: 7,
    },
  });

  const St3Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 3,
      courseId: 8,
    },
  });

  const St3Enrrolment3 = await db.enrollment.create({
    data: {
      studentId: 3,
      courseId: 9,
    },
  });

  const St4Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 4,
      courseId: 6,
    },
  });

  const St4Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 4,
      courseId: 1,
    },
  });

  const St4Enrrolment3 = await db.enrollment.create({
    data: {
      studentId: 4,
      courseId: 8,
    },
  });

  const St5Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 5,
      courseId: 2,
    },
  });

  const St5Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 5,
      courseId: 3,
    },
  });

  const St5Enrrolment3 = await db.enrollment.create({
    data: {
      studentId: 5,
      courseId: 8,
    },
  });

  const St6Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 6,
      courseId: 5,
    },
  });

  const St6Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 6,
      courseId: 3,
    },
  });

  const St6Enrrolment3 = await db.enrollment.create({
    data: {
      studentId: 6,
      courseId: 4,
    },
  });

  const St7Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 7,
      courseId: 2,
    },
  });

  const St7Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 7,
      courseId: 4,
    },
  });

  const St7Enrrolment3 = await db.enrollment.create({
    data: {
      studentId: 7,
      courseId: 2,
    },
  });

  const St8Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 8,
      courseId: 9,
    },
  });

  const St8Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 8,
      courseId: 8,
    },
  });

  const St9Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 9,
      courseId: 6,
    },
  });

  const St9Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 9,
      courseId: 2,
    },
  });

  const St10Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 10,
      courseId: 7,
    },
  });

  const St10Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 10,
      courseId: 3,
    },
  });

  const St11Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 11,
      courseId: 4,
    },
  });

  const St11Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 11,
      courseId: 7,
    },
  });

  const St12Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 12,
      courseId: 3,
    },
  });

  const St12Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 12,
      courseId: 5,
    },
  });

  const St13Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 13,
      courseId: 9,
    },
  });

  const St13Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 13,
      courseId: 4,
    },
  });

  const St14Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 14,
      courseId: 5,
    },
  });

  const St14Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 14,
      courseId: 2,
    },
  });

  const St15Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 15,
      courseId: 7,
    },
  });

  const St15Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 15,
      courseId: 6,
    },
  });

  const St16Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 16,
      courseId: 3,
    },
  });

  const St16Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 16,
      courseId: 1,
    },
  });

  const St17Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 17,
      courseId: 7,
    },
  });

  const St17Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 17,
      courseId: 5,
    },
  });

  const St18Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 18,
      courseId: 4,
    },
  });

  const St18Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 18,
      courseId: 2,
    },
  });

  const St19Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 19,
      courseId: 8,
    },
  });

  const St19Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 19,
      courseId: 7,
    },
  });

  const St20Enrrolment1 = await db.enrollment.create({
    data: {
      studentId: 20,
      courseId: 7,
    },
  });

  const St20Enrrolment2 = await db.enrollment.create({
    data: {
      studentId: 20,
      courseId: 9,
    },
  });

  const Grade1 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 1,
      grade: 9,
    },
  });

  const Grade2 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 2,
      grade: 5,
    },
  });

  const Grade3 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 3,
      grade: 5,
    },
  });

  const Grade4 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 4,
      grade: 8,
    },
  });

  const Grade5 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 5,
      grade: 2,
    },
  });

  const Grade6 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 6,
      grade: 3,
    },
  });

  const Grade7 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 7,
      grade: 6,
    },
  });

  const Grade8 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 8,
      grade: 9,
    },
  });

  const Grade9 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 9,
      grade: 6,
    },
  });

  const Grade10 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 10,
      grade: 7,
    },
  });

  const Grade11 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 11,
      grade: 2,
    },
  });

  const Grade12 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 12,
      grade: 10,
    },
  });

  const Grade13 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 13,
      grade: 1,
    },
  });

  const Grade14 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 14,
      grade: 2,
    },
  });

  const Grade15 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 15,
      grade: 7,
    },
  });

  const Grade16 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 16,
      grade: 5,
    },
  });

  const Grade17 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 17,
      grade: 2,
    },
  });

  const Grade18 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 18,
      grade: 9,
    },
  });

  const Grade19 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 19,
      grade: 8,
    },
  });

  const Grade20 = await db.grade.create({
    data: {
      name: "Exam 1",
      enrollmentId: 20,
      grade: 4.9,
    },
  });

  const Grade21 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 1,
      grade: 0,
    },
  });

  const Grade22 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 2,
      grade: 3.5,
    },
  });

  const Grade23 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 3,
      grade: 7.5,
    },
  });

  const Grade24 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 4,
      grade: 5,
    },
  });

  const Grade25 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 5,
      grade: 6,
    },
  });

  const Grade26 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 6,
      grade: 8,
    },
  });

  const Grade27 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 7,
      grade: 8,
    },
  });

  const Grade28 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 8,
      grade: 10,
    },
  });

  const Grade29 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 9,
      grade: 5,
    },
  });

  const Grade30 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 10,
      grade: 1,
    },
  });

  const Grade31 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 11,
      grade: 6.5,
    },
  });

  const Grade32 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 12,
      grade: 7.5,
    },
  });

  const Grade33 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 13,
      grade: 9,
    },
  });

  const Grade34 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 14,
      grade: 3.5,
    },
  });

  const Grade35 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 15,
      grade: 6.5,
    },
  });

  const Grade36 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 16,
      grade: 7,
    },
  });

  const Grade37 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 17,
      grade: 8,
    },
  });

  const Grade38 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 18,
      grade: 8,
    },
  });

  const Grade39 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 19,
      grade: 1,
    },
  });

  const Grade40 = await db.grade.create({
    data: {
      name: "Exam 2",
      enrollmentId: 20,
      grade: 3,
    },
  });

  const Grade41 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 1,
      grade: 0,
    },
  });

  const Grade42 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 2,
      grade: 3.5,
    },
  });

  const Grade43 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 3,
      grade: 7.5,
    },
  });

  const Grade44 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 4,
      grade: 5,
    },
  });

  const Grade45 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 5,
      grade: 6,
    },
  });

  const Grade46 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 6,
      grade: 8,
    },
  });

  const Grade47 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 7,
      grade: 8,
    },
  });

  const Grade48 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 8,
      grade: 10,
    },
  });

  const Grade49 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 9,
      grade: 5,
    },
  });

  const Grade50 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 10,
      grade: 1,
    },
  });

  const Grade51 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 11,
      grade: 6.5,
    },
  });

  const Grade52 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 12,
      grade: 7.5,
    },
  });

  const Grade53 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 13,
      grade: 9,
    },
  });

  const Grade54 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 14,
      grade: 3.5,
    },
  });

  const Grade55 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 15,
      grade: 6.5,
    },
  });

  const Grade56 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 16,
      grade: 7,
    },
  });

  const Grade57 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 17,
      grade: 8,
    },
  });

  const Grade58 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 18,
      grade: 8,
    },
  });

  const Grade59 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 19,
      grade: 1,
    },
  });

  const Grade60 = await db.grade.create({
    data: {
      name: "Exam 3",
      enrollmentId: 20,
      grade: 3,
    },
  });

}

await main();