const express = require('express');
const controllerRouter = express.Router();
const jobsController = require("../controllers/jobs")

controllerRouter.get("/", jobsController.index)
controllerRouter.get("/title/:title", jobsController.show)
controllerRouter.post("/", jobsController.create)
controllerRouter.put("/update/:title", jobsController.update)
controllerRouter.delete("/delete/:title", jobsController.destroy)


module.exports = controllerRouter;