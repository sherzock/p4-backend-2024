import type { ErrorRequestHandler } from "express";
import { send } from "./response";

//if (e.name === "NotFoundError") {
//    send(res).NotFound(`Course Not found`);
//  }
//  send(res).InternalError(`Internal error.` );

export const defaultErrorHandler: ErrorRequestHandler = (err, req, res ,next) => {
    send(res).InternalError("Internal Error");
}