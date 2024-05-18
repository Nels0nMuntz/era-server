import express from "express";
import eventRouter from "./event";

const rootRouter = express.Router();

rootRouter.use("/events", eventRouter);

export default rootRouter;
