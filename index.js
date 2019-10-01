const express = require("express");
const parser = require("body-parser")
const cors = require("cors")
const app = express();






app.use(cors())
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

const weatherRouter = require("./Routes/weather")
const roverRouter = require("./Routes/rover")

app.use('/', roverRouter)
app.use("/weather", weatherRouter)




app.set("port", process.env.PORT || 5050);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
