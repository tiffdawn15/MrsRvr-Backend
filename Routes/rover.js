const express = require('express');
const controllerRouter = express.Router();
const roverController = require("../controllers/rover")

controllerRouter.get("/", roverController.index)
controllerRouter.get("/name/:roverName", roverController.show)
controllerRouter.post("/", roverController.create)
controllerRouter.put("/name/update/:_id", roverController.update)
controllerRouter.delete("/delete/:_id", roverController.delete)


module.exports = controllerRouter;


