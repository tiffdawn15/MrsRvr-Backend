const express = require("express");
const parser = require("body-parser")
const cors = require("cors")
const app = express();



// const jobsRouter = require("./routes/jobs")
// const skillsRouter = require("./routes/skills")
// const onetRouter = require("./routes/onet")

app.use(cors())
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

app.get("/", (request, response) => {
    response.send("Hello World");
  });

// app.use('/', jobsRouter)
// app.use("/skills", skillsRouter)
// app.use("/onet", onetRouter)



app.set("port", process.env.PORT || 5050);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
