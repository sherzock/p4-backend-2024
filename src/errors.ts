import type { ErrorRequestHandler, RequestHandler } from "express";
import { send } from "./response";
import type { ZodError } from "zod";

//if (e.name === "NotFoundError") {
//    send(res).NotFound(`Course Not found`);
//  }
//  send(res).InternalError(`Internal error.` );

const zodErrorMessage = (err: ZodError): string => {
    const [firstIssue] = err.issues;
    const { code, path } = firstIssue;
    switch (code) {
      case "too_small": {
        return `${path[0]} is too small.`;
      }
      default: {
        return `Input data is wrong.`;
      }
    }
  };

export const defaultErrorHandler: ErrorRequestHandler = (err, req, res ,next) => {
    console.log(err.name);
    switch(err.name){
        case "NotFoundError": {
            return send(res).NotFound('Not Found');
        }
        case "ZodError": {
            return send(res).BadRequest(zodErrorMessage(err));
        }
        default: {
            send(res).InternalError("Internal Error");
        }
    }
}

export const catchErrors =
  (myHandler: RequestHandler): RequestHandler =>
  async (req, res, next) => {
    try {
        await myHandler(req, res, next);
    } catch (e) {
        next(e);
    }
  };