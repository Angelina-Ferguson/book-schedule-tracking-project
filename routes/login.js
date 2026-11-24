import { Router } from "express";
import cors from 'cors';
import * as AuthenticationController from "../src/Controllers/AuthenticationController.js";

const loginRouter = Router();

loginRouter.post("/", cors(), AuthenticationController.checkLogin);

export default loginRouter;