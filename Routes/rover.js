const express = require('express');
const controllerRouter = express.Router();
const roverController = require("../controllers/rover")

controllerRouter.get("/", roverController.index)
// controllerRouter.get("/title/:title", roverController.show)
controllerRouter.post("/", roverController.create)
controllerRouter.put("/update/:title", roverController.update)
controllerRouter.delete("/delete/:title", roverController.destroy)


module.exports = controllerRouter;