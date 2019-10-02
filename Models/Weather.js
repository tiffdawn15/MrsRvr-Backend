

const mongoose = require("../connection")
const Schema = mongoose.Schema


//Model that sets up the airTemp, Pressue and general Weather Schema for the chart. 

const pressuerSchema = new Schema({
    av: Number, 
    ct: Number, 
    mn: Number, 
    mx: Number
})



const weatherSchema = new Schema ({
    Sol:Number, 

    av: Number, 
    ct: Number, 
    mn: Number, 
    mx: Number, 
    First_UTC: String, 
    Last_UTC: String, 
    pre: [pressuerSchema], 
    Season: String, 
    render: Boolean






})

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;


       
      
     