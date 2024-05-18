import express from "express";

const eventRouter = express.Router();

eventRouter.get("/", (req, res) => {
  res.status(200).json({ path: "/events" });
});
eventRouter.get("/:id", (req, res) => {
  const {id} = req.params
  res.status(200).json({ path: `/events/${id}` });
});
eventRouter.post("/:id/register", (req, res) => {
  const {id} = req.params
  res.status(200).json({ path: `/events/${id}/register` });
});

export default eventRouter;
