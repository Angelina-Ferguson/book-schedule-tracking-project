import { Router } from "express";

const indexRouter = Router({ mergeParams: true });

indexRouter.get("/", (req, res) => {
  res.send(JSON.stringify({ "response":"hello from api" }))
});

export default indexRouter;

