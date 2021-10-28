import { Express, Request, Response } from "express";
import { validateRequest } from './middleware'
import { createUserHandler } from "./controller/user";
import { createUserSchema } from "./schema/user";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
}