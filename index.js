const express = require("express");
const parser = require("body-parser")
const cors = require("cors")
const app = express();

//Mongoose is specific to the server.js authentication thing 
const mongoose = require("mongoose")





app.use(cors())
app.use(parser.urlencoded({extended: true}));
//in the server.js file extended was set to false. Try this out laster if there is a bug 
app.use(parser.json())

//DB Congig. Does thi sreplace the connection file? 
// const db = require("./config/keys").mongoURI;

// Connect to MongoDB

const weatherRouter = require("./Routes/weather")
const roverRouter = require("./Routes/rover")


app.use('/', roverRouter)
app.use("/weather", weatherRouter)

//I connected to the mongoDB in the connection file. 

app.set("port", process.env.PORT || 5060);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});










