

const mongoose = require("../connection")
const Schema = mongoose.Schema


//Model that sets up the airTemp, Pressue and general Weather Schema for the chart. 
const airTempSchema = new Schema({
    av: Number, 
    ct: Number, 
    mn: Number, 
    mx: Number 
})
const pressuerSchema = new Schema({
    av: Number, 
    ct: Number, 
    mn: Number, 
    mx: Number
})



const weatherSchema = new Schema ({
    sol:Number, 
    airTemp:[airTempSchema], 
    First_UTX: String, 
    Last_UTC: String, 
    pre: [pressuerSchema], 
    Season: String, 






})

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;


       
      
     