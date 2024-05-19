import express from "express";
import eventRouter from "./event";
import { NotFoundException } from "../lib";

const rootRouter = express.Router();

rootRouter.use("/events", eventRouter);
rootRouter.use("/*", () => {
  throw new NotFoundException("Not Found ");
});

export default rootRouter;
