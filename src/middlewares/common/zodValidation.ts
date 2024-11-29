import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { handleAsync } from "../../utils";

const zodValidator = (schema: AnyZodObject) => {
  return handleAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync({
        ...req.body,
      });
      next();
    },
  );
};

export default zodValidator;
