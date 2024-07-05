import { Router } from "express";
import { filterRouter } from "./filterRoutes.js";

export const rootRouter = Router();

rootRouter.use("/", filterRouter);

