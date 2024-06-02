# About

Backend implementation of a school management system using an Express server to create the API and a Database based in Postgres.
Implementacion backend de un sistema de organización para una escuela o universidad. Se ha usado Express para crear el servidor de la api y una base de datos basada en Postgres.

La base de datos tiene las siguientes tablas: Estudiantes, Profesores, Clases, Cursos, Aulas y Notas.

# Como poner en marcha la base de datos

Al descargar el proyecto, lo primero que debemos hacer es generar el container de docker. Desde la carpeta /Docker debemos hacer:

docker compose up -d

Una vez generado el container, tenemos que generar la base de datos con:

bunx prisma generate

A continuación tendremos que hacer un push del modelo creado a la nueva base de datos:

bunx prisma db push

Después debemos generar los datos para poder probar el modelo que hemos creado:

bunx prisma db seed

Podemos ver el contenido usando:

bunx prisma studio

Tambien podemos usar pgadmin:

usuario postgres: fullstack contraseña postgres: fullstack123

usuario pgadmin: fullstack@upc.edu contraseña: fullstack123

el puerto para entrar es el 5050 por defecto:

localhost:5050

Para Empezar el servidor hay que poner:

 bun run dev

Ahora ya estamos preparados para usarlo.

# Endpoints

## Estudiantes

GET: http://localhost:8888/students

Se le puede añadir uno de los siguientes query parameters: firstName, lastName o email

GET by id: http://localhost:8888/students/id

El id del estudiante se ha de substituir

POST: http://localhost:8888/students

Se ha de añadir la información del nuevo estudiante

PUT: http://localhost:8888/students/id

El id del estudiante se ha de substituir y se debe de añadir la información del nuevo estudiante

DELETE: http://localhost:8888/students/id

El id del estudiante se ha de substituir. 
Si el estudiante esta matriculado en algun curso, no podra ser borrado.

## Profesores

GET: http://localhost:8888/teachers

Se le puede añadir uno de los siguientes query parameters: firstName, lastName o email

GET by id: http://localhost:8888/teachers/id

El id del profesor se ha de substituir

POST: http://localhost:8888/teachers

Se ha de añadir la información del nuevo profesor

PUT: http://localhost:8888/teachers/id

El id del profesor se ha de substituir y se debe de añadir la información del nuevo profesor.

DELETE: http://localhost:8888/teachers/id

El id del profesor se ha de substituir. 
Si el profesor esta haciendo en algun curso, no podra ser borrado.

## Cursos

GET: http://localhost:8888/courses

Se le puede añadir uno de los siguientes query parameters: code, classromId o teacherId

GET by id: http://localhost:8888/courses/id

El id del curso se ha de substituir

POST: http://localhost:8888/courses

Se ha de añadir la información del nuevo curso

PUT: http://localhost:8888/courses/id

El id del curso se ha de substituir y se debe de añadir la información del nuevo curso.

DELETE: http://localhost:8888/courses/id

El id del curso se ha de substituir. 
Si el curso tiene alumnos matriculados, no podra ser borrado.

## Aulas


GET: http://localhost:8888/classrooms

Se le puede añadir "name" a los query parameters

GET by id: http://localhost:8888/classrooms/id

El id del aula se ha de substituir

POST: http://localhost:8888/classrooms

Se ha de añadir la información de la nueva aula

PUT: http://localhost:8888/classrooms/id

El id del aula se ha de substituir y se debe de añadir la información de la nueva aula.

DELETE: http://localhost:8888/classrooms/id

El id del aula se ha de substituir. 
Si el aula tiene cursos asignados, no podra ser borrado.

# Matriculas

GET: http://localhost:8888/enrollments

Se le puede añadir uno de los siguientes query parameters: studentId o courseId

GET by id: http://localhost:8888/enrollments/id

El id de la matricula se ha de substituir

POST: http://localhost:8888/enrollments

Se ha de añadir la información de la nueva matricula

PUT: http://localhost:8888/enrollments/id

El id de la matricula se ha de substituir y se debe de añadir la información de la nueva matricula.

DELETE: http://localhost:8888/enrollments/id

El id de la matricula se ha de substituir. 
Si la matricula tiene notas añadidas, no podra ser borrada.

# Notas

GET: http://localhost:8888/grades

Se le puede añadir uno de los siguientes query parameters: name o enrollment

GET by id: http://localhost:8888/grades/id

El id de la nota se ha de substituir

POST: http://localhost:8888/grades

Se ha de añadir la información de la nueva nota

PUT: http://localhost:8888/grades/id

El id de la nota se ha de substituir y se debe de añadir la información de la nueva nota.

DELETE: http://localhost:8888/grades/id

El id de la nota se ha de substituir. 
Si la nota tiene notas añadidas, no podra ser borrada.

# Entregable

En el zip del campus se ha añadido el .env con la url de postgres y el puerto por defecto del servidor.


# Enunciado Original del Trabajo


# Backend en Typescript, Express y Prisma

Se trata de hacer un _backend_ usando Typescript, Express y Prisma. El _backend_ implementado en clase es el modelo a seguir. Para alumnos que lo hacen por primera vez y sienten algo de incomodidad, lo ideal es usar el modelo de guía y hacer un _backend_ cercano al original de tal manera que la práctica sea un repaso a fondo. Para los que estén más cómodos, lo ideal es innovar en algun aspecto y salirse parcialmente del modelo en ciertos momentos o explorar algún interés personal. El modelo de datos es directamente la práctica anterior.

Al usar Prisma, es quizás buena idea explorar proveedores de Prisma que no sean precisamente Postgres, ya que el coste de hacerlo es mínimo (aunque esto no es obligatorio para nada). Aparte de los proveedores locales alternativos a Postgres, existen también opciones en la nube equivalentes a Postgres como [PlanetScale](https://www.prisma.io/docs/guides/database/planetscale), [CockroachDB](https://www.prisma.io/docs/guides/database/cockroachdb) o [Supabase](https://www.prisma.io/docs/guides/database/supabase), bien explicadas en la documentación de Prisma.

## Entregable

Como anteriormente, para hacer esta práctica hay que:
- Hacer un _fork_ de este repositorio.
- Trabajar en el _fork_ haciendo commits regularmente (una práctica que aparece entera en un solo commit tendrá una nota muy baja o cero, hay que mostrar todo el proceso intermedio).
- Al finalizar, se debe crear un `ZIP` del repositorio (que incluya el fichero `.env`!) y entregarlo en el [Campus Online de UPC School](https://talent.upc.edu) (habrá una tarea preparada para ello).

El entregable es el código del proyecto, incluyendo:
- `docker-compose.yml` si la base de datos corre bajo Docker.
- El código completo del servidor.
- Un fichero exportado de [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) con la lista de _endpoints_ que se han probado. (Esto es **extremadamente** relevante porque la corrección del backend, de no tener este fichero, es un trabajo muchísimo más tedioso!).
- Si se necesitan credenciales para acceder a servicios de cloud (o incluso localmente), es importante incluir en el ZIP del campus el fichero `.env` con éstas. Es muy importante no subir ese fichero en GitHub (es decir, incluirlo en `.gitignore`).
