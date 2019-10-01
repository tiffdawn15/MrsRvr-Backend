
//This will be the data used for the homepage 


const mongoose = require("../connection")
const Schema = mongoose.Schema


//I moved the rover model into the image model. They should be able to use this for when they click. 


const imageSchema = new Schema ({
    img_src: String, 
    earth_date: Date, 
    SOL: Number,
    rover:{
        name: String, 
        Landing_Date: Number, 
        Launch_Date: Number, 
        Status: String, 
        total_photos: Number,
        Max_Sol: Number, 
}
    

})

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
