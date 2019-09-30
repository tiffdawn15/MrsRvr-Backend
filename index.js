const express = require("express");
const parser = require("body-parser")
const cors = require("cors")
const app = express();



const imageRouter = require("./Routes/image")
const roverRouter = require("./Routes/rover")


app.use(cors())
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

const imageRouter = require("./Routes/image")
const roverRouter = require("./Routes/rover")

app.use('/', imageRouter)
app.use("/rover", roverRouter)




app.set("port", process.env.PORT || 5050);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
