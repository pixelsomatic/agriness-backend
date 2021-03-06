import express from "express";
import { omit } from "lodash";
import { createUser } from "../service/user";
import log from "../logger";

export async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}