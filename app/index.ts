import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/root";
import { errorsHandlerMiddleware } from "./middlewares";

dotenv.config({
  path: path.join(__dirname, "..", `.env.${process.env.NODE_ENV}`),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(errorsHandlerMiddleware);

export default app;
