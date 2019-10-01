const express = require('express');
const controllerRouter = express.Router();
const roverController = require("../controllers/rover")

controllerRouter.get("/", roverController.index)
controllerRouter.get("/name/:roverName", roverController.show)
controllerRouter.post("/", roverController.create)
controllerRouter.put("name/update/:roverName", roverController.update)
controllerRouter.delete("/delete/:roverName", roverController.destroy)


module.exports = controllerRouter;