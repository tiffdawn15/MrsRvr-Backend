
//This will be the data used for the homepage 


const mongoose = require("../connection")
const Schema = mongoose.Schema


//I moved the rover model into the Rover model. They should be able to use this for when they click. 
//On the homepage we will use the img_src = SOL 
//Individual pages will display Rover mission data in the Rover object 


const roverSchema = new Schema ({
    id: Number,
    img_src: String, 
    earth_date: String, 
    SOL: Number,
    roverName: String, 
    roverLanding_date: String, 
    roverLaunch_date: String, 
    roverStatus: String, 
    roverTotal_photos: Number,
    render: Boolean
     
})
    


const Rover = mongoose.model("Rover", roverSchema);

module.exports = Rover;

