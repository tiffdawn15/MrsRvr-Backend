const mongoose = require("../connection")
const Schema = mongoose.Schema


const imageSchema = new Schema ({
    img_src: String, 
    earth_date: Number, 
    SOL: Number

    

})

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
