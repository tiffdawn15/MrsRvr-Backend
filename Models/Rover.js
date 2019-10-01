
//This will be the data used for the homepage 


const mongoose = require("../connection")
const Schema = mongoose.Schema


//I moved the rover model into the Rover model. They should be able to use this for when they click. 
//On the homepage we will use the img_src = SOL 
//Individual pages will display Rover mission data in the Rover object 


const roverSchema = new Schema ({
    img_src: String, 
    earth_date: Date, 
    SOL: Number,
    roverName: String, 
    roverLanding_Date: Number, 
    roverLaunch_Date: Number, 
    roverStatus: String, 
    roverTotal_photos: Number,
    roverMax_Sol: Number, 
})
    


const Rover = mongoose.model("Rover", roverSchema);

module.exports = Rover;

