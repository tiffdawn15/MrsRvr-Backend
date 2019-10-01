const express = require('express');
const controllerRouter = express.Router();
const weatherController = require("../controllers/weather")

controllerRouter.get("/", weatherController.index)
// controllerRouter.get("/title/:title", weatherController.show)
controllerRouter.post("/", weatherController.create)
// controllerRouter.put("/update/:title", weatherController.update)
// controllerRouter.delete("/delete/:title", weatherController.destroy)


module.exports = controllerRouter;