const express = require('express');
const controllerRouter = express.Router();
const imageController = require("../controllers/image")

controllerRouter.get("/", imageController.index)
// controllerRouter.get("/title/:title", imageController.show)
controllerRouter.post("/", imageController.create)
// controllerRouter.put("/update/:title", imageController.update)
// controllerRouter.delete("/delete/:title", imageController.destroy)


module.exports = controllerRouter;