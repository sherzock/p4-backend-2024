import type { Response as ExpressResponse} from 'express'

enum HttpStatusCode {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500,
    NotImplemented = 501,
}

export const send = (res: ExpressResponse) => {
    return {
        ok: (data:any) => res.status(HttpStatusCode.OK).json(data),
        InternalError: (msg: string) => res.status(HttpStatusCode.InternalServerError).send(msg),
        Created: (data:any) => res.status(HttpStatusCode.Created).json(data),
        NotFound: (msg: string) => res.status(HttpStatusCode.NotFound).send(msg),
        BadRequest: (msg: string) => res.status(HttpStatusCode.BadRequest).send(msg),
        NotImplemented: () => res.status(HttpStatusCode.NotImplemented).send('Not Implemented'),
    }
}