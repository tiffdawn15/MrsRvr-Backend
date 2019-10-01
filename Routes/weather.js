const express = require('express');
const controllerRouter = express.Router();
const weatherController = require("../controllers/weather")

controllerRouter.get("/", weatherController.index)
controllerRouter.get("/sol/:Sol", weatherController.show)
controllerRouter.post("/", weatherController.create)
controllerRouter.put("/update/:Sol", weatherController.update)
controllerRouter.delete("/delete/:Sol", weatherController.destroy)


module.exports = controllerRouter;